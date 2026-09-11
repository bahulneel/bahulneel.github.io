import Head from 'next/head';
import ProfileLinks from '../components/ProfileLinks';
import cv from '../public/cv.json';
import { RichText, workOfType } from '../lib/siteContent';

function Page() {
  const aboutPage = workOfType(cv, 'AboutPage');
  const website = workOfType(cv, 'WebSite');
  const title = aboutPage?.name || 'About Me';

  return (
    <div
      className="mx-auto p-4 bg-secondary-lightGray"
      itemScope
      itemType="https://schema.org/AboutPage"
      itemID={aboutPage?.['@id']}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {website?.['@id'] && (
        <a itemProp="isPartOf" href={website['@id']} hidden>
          {website.name}
        </a>
      )}
      <h1 className="text-3xl font-bold mb-4" itemProp="name">{title}</h1>
      <div itemProp="text">
        <RichText work={aboutPage} paragraphClassName="mb-4" />
      </div>
      <ProfileLinks className="mt-6" />
    </div>
  );
}

export default Page;
