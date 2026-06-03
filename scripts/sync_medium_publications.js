#!/usr/bin/env node
/*
 * Sync cv.json publications from the @bahulneel Medium RSS feed.
 *
 * Matched entries keep curated titles, subtitles, and tags. New feed items
 * get title/subtitle from RSS (subtitle from first H2 when available).
 *
 * Usage:
 *   node scripts/sync_medium_publications.js
 *   node scripts/sync_medium_publications.js --dry-run
 *   node scripts/sync_medium_publications.js --username=bahulneel
 *
 * Exit codes:
 *   0 — no changes (or dry-run with no changes)
 *   1 — error
 *   2 — cv.json would be / was updated
 */

const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');

const CV_PATH = path.join(__dirname, '..', 'public', 'cv.json');
const DEFAULT_USERNAME = 'bahulneel';

const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'subtitle'],
  },
});

function parseArgs(argv) {
  const dryRun = argv.includes('--dry-run');
  const usernameArg = argv.find((a) => a.startsWith('--username='));
  const username = usernameArg
    ? usernameArg.split('=')[1]
    : DEFAULT_USERNAME;
  return { dryRun, username };
}

/** Strip tracking query params; keep canonical article URL. */
function normaliseLink(rawLink) {
  try {
    const url = new URL(rawLink);
    url.search = '';
    url.hash = '';
    return url.toString().replace(/\/$/, '');
  } catch {
    return rawLink.split('?')[0].replace(/\/$/, '');
  }
}

/** Match key: last path segment without trailing slash. */
function linkSlug(link) {
  const normalised = normaliseLink(link);
  const parts = normalised.split('/').filter(Boolean);
  return parts[parts.length - 1] || normalised;
}

function publisherFromLink(link) {
  try {
    const host = new URL(link).hostname;
    if (host.includes('levelup.gitconnected.com') || host.includes('gitconnected')) {
      return 'Level Up Coding';
    }
    if (host.includes('medium.com')) {
      return 'Medium';
    }
  } catch {
    // fall through
  }
  return 'Medium';
}

function formatDate(pubDate) {
  return new Date(pubDate).toISOString().slice(0, 10);
}

/** First ## heading from HTML, or first line of contentSnippet. */
function extractSubtitle(item) {
  const html = item['content:encoded'] || item.content || '';
  const h2Match = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  if (h2Match) {
    return h2Match[1]
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  const snippet = (item.contentSnippet || item.subtitle || '').trim();
  if (snippet) {
    const firstLine = snippet.split(/\n+/)[0].trim();
    if (firstLine.length > 0 && firstLine.length <= 200) {
      return firstLine;
    }
  }

  return '';
}

function indexExisting(publications) {
  const bySlug = new Map();
  for (const pub of publications) {
    bySlug.set(linkSlug(pub.link), pub);
  }
  return bySlug;
}

function buildPublication({ title, subtitle, date, publisher, link, tags }) {
  const pub = { title };
  if (subtitle) pub.subtitle = subtitle;
  pub.date = date;
  pub.publisher = publisher;
  pub.link = link;
  if (tags?.length) pub.tags = tags;
  return pub;
}

function normalisePublication(pub) {
  return buildPublication(pub);
}

function publicationsEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((entry, i) => {
    const left = normalisePublication(entry);
    const right = normalisePublication(b[i]);
    return JSON.stringify(left) === JSON.stringify(right);
  });
}

async function fetchPublications(username) {
  const feedUrl = `https://medium.com/feed/@${username.replace(/^@/, '')}`;
  const feed = await parser.parseURL(feedUrl);

  if (!feed.items || feed.items.length === 0) {
    throw new Error(`No items in Medium feed for @${username}`);
  }

  const cv = JSON.parse(fs.readFileSync(CV_PATH, 'utf8'));
  const existing = cv.publications || [];
  const existingIndex = indexExisting(existing);

  const fromFeed = feed.items.map((item) => {
    const link = normaliseLink(item.link);
    const slug = linkSlug(link);
    const prior = existingIndex.get(slug);

    const publication = buildPublication({
      title: prior?.title || item.title.trim(),
      date: formatDate(item.pubDate),
      publisher: publisherFromLink(link),
      link,
      subtitle: prior?.subtitle || extractSubtitle(item),
      tags: prior?.tags,
    });

    return publication;
  });

  // Medium RSS only exposes the most recent ~10 posts. Merge feed updates into
  // the existing list rather than replacing it, so older articles stay listed.
  const feedSlugs = new Set(fromFeed.map((p) => linkSlug(p.link)));
  const retained = existing
    .filter((p) => !feedSlugs.has(linkSlug(p.link)))
    .map((p) => normalisePublication(p));

  return [...fromFeed, ...retained].sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function main() {
  const { dryRun, username } = parseArgs(process.argv.slice(2));

  const cv = JSON.parse(fs.readFileSync(CV_PATH, 'utf8'));
  const previous = cv.publications || [];
  const next = await fetchPublications(username);

  if (publicationsEqual(previous, next)) {
    console.log(`[sync_medium] @${username}: ${next.length} articles, cv.json already up to date`);
    process.exit(0);
  }

  const added = next.filter((p) => !previous.some((e) => linkSlug(e.link) === linkSlug(p.link)));
  const removed = previous.filter((p) => !next.some((e) => linkSlug(e.link) === linkSlug(p.link)));

  console.log(`[sync_medium] @${username}: ${next.length} articles (${added.length} new, ${removed.length} removed)`);
  for (const pub of added) {
    console.log(`  + ${pub.date} ${pub.title}`);
  }
  for (const pub of removed) {
    console.log(`  - ${pub.date} ${pub.title}`);
  }

  if (dryRun) {
    console.log('[sync_medium] dry-run: no files written');
    process.exit(2);
  }

  cv.publications = next;
  fs.writeFileSync(CV_PATH, `${JSON.stringify(cv, null, 2)}\n`, 'utf8');
  console.log(`[sync_medium] updated ${CV_PATH}`);
  process.exit(2);
}

main().catch((err) => {
  console.error('[sync_medium] error:', err.message);
  process.exit(1);
});
