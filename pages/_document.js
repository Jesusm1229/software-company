import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Barlow */}
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Barlow/Barlow-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Inter */}
        <link
          rel="preload"
          href="/fonts/Inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Sarina */}
        <link
          rel="preload"
          href="/fonts/Sarina/Sarina-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Monserrat */}
        <link
          rel="preload"
          href="/fonts/Montserrat-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Holland */}
        <link
          rel="preload"
          href="/fonts/Holland.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Ordinary */}
        <link
          rel="preload"
          href="/fonts/OrdinarySDemoRegular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Tailwind CSS Typography  */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
        />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/kxo3pgz.css" />
        <link rel="stylesheet" type="text/css" href="/styles/base.module.css" />
        <link
          rel="stylesheet"
          href="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        />
        {/*  <script src="/components/Center/index.js"></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
