import Head from "next/head";

import "../styles/tailwind.css";

function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
