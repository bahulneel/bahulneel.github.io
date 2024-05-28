import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = 'prose mx-auto';
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
