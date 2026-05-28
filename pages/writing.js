// Writing content
import Head from 'next/head';
import Card from '../components/Card';
import cv from '../public/cv.json';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

function Page() {
  const publications = (cv.publications || [])
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Group by year (descending) for at-a-glance scannability over a multi-year body of work.
  const byYear = publications.reduce((acc, pub) => {
    const year = new Date(pub.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => b - a);

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
      {years.map((year) => (
        <div key={year}>
          <h2 className="font-bold mt-6 mb-2">{year}</h2>
          {byYear[year].map((pub, index) => (
            <Card
              key={`${year}-${index}`}
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
          ))}
        </div>
      ))}
    </div>
  );
}

export default Page;
