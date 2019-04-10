import React from 'react';

export default {
  siteRoot: 'https://queuemusicapp.com',
  getSiteData: () => ({
    title: 'Queue'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/pages/Home/index.js'
    },
    {
      path: '/terms-and-conditions',
      component: 'src/pages/termsAndConditions.js'
    },
    {
      path: '/privacy-policy',
      component: 'src/pages/privacyPolicy.js'
    }
  ],
  Document: ({
    Html,
    Head,
    Body,
    children
    // state:
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
