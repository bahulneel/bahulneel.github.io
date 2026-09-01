import Head from 'next/head';
import Link from 'next/link';
import ResearchDesignEntry from '../components/ResearchDesignEntry';
import cv from '../public/cv.json';

const ORG_ORDER = ['RelationalFabric', 'bahulneel', 'relativistic-ui', 'TotalPerspective'];
const ORG_LABELS = {
  RelationalFabric: 'RelationalFabric',
  bahulneel: 'bahulneel',
  'relativistic-ui': 'relativistic-ui',
  TotalPerspective: 'TotalPerspective (legacy)',
};
const STATUS_ORDER = { Active: 0, Published: 1, Early: 2, Superseded: 3 };

function groupResearchDesign(entries) {
  const byOrg = entries.reduce((acc, item) => {
    if (!acc[item.org]) acc[item.org] = [];
    acc[item.org].push(item);
    return acc;
  }, {});

  return ORG_ORDER
    .filter((org) => byOrg[org]?.length)
    .map((org) => ({
      org,
      label: ORG_LABELS[org] || org,
      items: byOrg[org].sort(
        (a, b) => (STATUS_ORDER[a.status] ?? 9) - (STATUS_ORDER[b.status] ?? 9),
      ),
    }));
}

function Page() {
  const groups = groupResearchDesign(cv.researchDesign || []);

  return (
    <div
      className="mx-auto p-4 bg-secondary-lightGray"
      itemScope
      itemType="http://schema.org/Person"
      itemID={`${cv.basics.name}`}
    >
      <Head>
        <title>Research &amp; Design</title>
      </Head>
      <h1 className="text-3xl font-bold mb-2">Research &amp; Design</h1>
      <p className="mb-6">
        Named concepts, specifications, and patterns, distinct from general skills and
        shippable repos. Each entry links to its specification, repository, or article
        where published. Implementations are listed under{' '}
        <Link href="/projects"><a className="text-primary-teal hover:underline">Projects</a></Link>
        ; long form exposition under{' '}
        <Link href="/writing"><a className="text-primary-teal hover:underline">Writing</a></Link>.
      </p>
      {groups.map(({ org, label, items }) => (
        <section key={org} className="mb-8">
          <h2 className="font-bold text-primary-darkBlue mb-2">{label}</h2>
          {items.map((item, index) => (
            <ResearchDesignEntry
              key={`${org}-${index}`}
              {...item}
              muted={item.status === 'Superseded'}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

export default Page;
