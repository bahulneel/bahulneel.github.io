import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function InventionsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/research-design');
  }, [router]);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0;url=/research-design" />
        <link rel="canonical" href="/research-design" />
        <title>Research &amp; Design</title>
      </Head>
      <p className="mx-auto p-4">
        Moved to{' '}
        <Link href="/research-design">
          <a className="text-primary-teal hover:underline">Research &amp; Design</a>
        </Link>
        .
      </p>
    </>
  );
}
