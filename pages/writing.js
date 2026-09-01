// Writing content
import Head from 'next/head';
import Card from '../components/Card';
import ProfileLinks from '../components/ProfileLinks';
import cv from '../public/cv.json';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

function PublicationCard({ pub }) {
  return (
    <Card
      title={pub.title}
      link={pub.link}
      subtitle={`${formatDate(pub.date)}${pub.publisher ? ` · ${pub.publisher}` : ''}`}
      content={
        <>
          {pub.subtitle && (
            <p itemProp="description">{pub.subtitle}</p>
          )}
          {pub.tags && pub.tags.length > 0 && (
            <p className="text-sm">
              {pub.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block mr-2 mb-1 px-2 py-0.5 rounded bg-primary-teal text-accent-white"
                >
                  {tag}
                </span>
              ))}
            </p>
          )}
        </>
      }
      itemScope
      itemType="http://schema.org/Article"
      itemProp={{ title: 'headline', subtitle: 'datePublished', content: 'description' }}
    />
  );
}

function ArchiveList({ archiveByYear }) {
  if (archiveByYear.length === 0) return null;

  const total = archiveByYear.reduce((count, { items }) => count + items.length, 0);

  return (
    <details className="mt-6 text-secondary-gray">
      <summary className="cursor-pointer font-semibold text-sm hover:text-primary-teal">
        Archive ({total} posts)
      </summary>
      <ul className="mt-3 pl-5 list-disc text-sm space-y-3">
        {archiveByYear.map(({ year, items }) => (
          <li key={year}>
            <span className="font-medium">{year}</span>
            <ul className="mt-1 pl-5 list-disc space-y-1">
              {items.map((pub, index) => (
                <li key={`${year}-${index}`} itemScope itemType="http://schema.org/Article">
                  <a
                    href={pub.link}
                    className="text-primary-teal hover:underline"
                    itemProp="url"
                  >
                    <span itemProp="headline">{pub.title}</span>
                  </a>
                  <span className="text-secondary-lightGray">
                    {' '}({formatDate(pub.date)}{pub.publisher ? ` · ${pub.publisher}` : ''})
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </details>
  );
}

function Page() {
  const publications = (cv.publications || [])
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const boosted = publications.filter((pub) => pub.boosted);
  const archive = publications.filter((pub) => !pub.boosted);

  const groupByYear = (items) => {
    const byYear = items.reduce((acc, pub) => {
      const year = new Date(pub.date).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(pub);
      return acc;
    }, {});
    return Object.keys(byYear).sort((a, b) => b - a).map((year) => ({ year, items: byYear[year] }));
  };

  const archiveByYear = groupByYear(archive);

  return (
    <div
      className="mx-auto p-4 bg-secondary-lightGray"
      itemScope
      itemType="http://schema.org/Person"
      itemID={`${cv.basics.name}`}
    >
      <Head>
        <title>Writing</title>
      </Head>
      <h1 className="text-3xl font-bold mb-2">Writing</h1>
      <p className="mb-4">
        Long form pieces on Level Up Coding and Medium: a running thread from
        platform thinking and knowledge engineering through type level
        programming and AI assisted development. Each piece links to the
        original post.
      </p>
      <ProfileLinks className="mb-6" linkClassName="text-primary-teal hover:underline" />
      {boosted.length > 0 && (
        <section className="mb-8">
          <h2 className="font-bold text-primary-darkBlue mb-2">Featured</h2>
          {boosted.map((pub, index) => (
            <PublicationCard key={`featured-${index}`} pub={pub} />
          ))}
        </section>
      )}
      <ArchiveList archiveByYear={archiveByYear} />
    </div>
  );
}

export default Page;
