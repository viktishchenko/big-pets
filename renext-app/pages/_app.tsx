import { AppProps } from "next/app";
import Head from "next/head";
import Router from 'next/router'
import "../styles/globals.css";
import ym from "react-yandex-metrika";
import { YMInitializer } from "react-yandex-metrika";

Router.events.on("routeChangeComplete", (url: string) => {
  // check server or client
  if (typeof window !== undefined) {
    ym("hit", url);
  }
});

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>DrTop - best shmule</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:local" content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
