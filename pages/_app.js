import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Head from 'next/head';
import cv from '../public/cv.json';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = 'prose mx-auto';
  }, []);

  const { name, image, summary } = cv.basics;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="description" content={summary} />
        <meta property="og:title" content={`${name}'s Personal Website`} />
        <meta property="og:description" content={summary} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mytwitterhandle" />
        <meta name="twitter:creator" content="@mytwitterhandle" />
        <meta name="twitter:title" content={`${name}'s Personal Website`} />
        <meta name="twitter:description" content={summary} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
