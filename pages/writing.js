// Writing content
import Head from 'next/head';
import Card from '../components/Card';
import cv from '../public/cv.json';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

function PublicationCard({ pub, featured = false }) {
  const card = (
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

  if (featured) return card;
  return <div className="opacity-80">{card}</div>;
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
      <p className="mb-6">
        Long-form pieces on Level Up Coding and Medium — a running thread from
        platform thinking and knowledge engineering through type-level
        programming and AI-assisted development. Each piece links to the
        original post.
      </p>
      {boosted.length > 0 && (
        <section className="mb-8">
          <h2 className="font-bold text-primary-darkBlue mb-2">Featured</h2>
          {boosted.map((pub, index) => (
            <PublicationCard key={`featured-${index}`} pub={pub} featured />
          ))}
        </section>
      )}
      {archiveByYear.length > 0 && (
        <section>
          <h2 className="font-bold text-secondary-gray mb-2">Archive</h2>
          {archiveByYear.map(({ year, items }) => (
            <div key={year}>
              <h3 className="font-semibold text-secondary-gray mt-4 mb-2">{year}</h3>
              {items.map((pub, index) => (
                <PublicationCard key={`${year}-${index}`} pub={pub} />
              ))}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Page;
