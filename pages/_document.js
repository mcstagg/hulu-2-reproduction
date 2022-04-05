import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
      <meta property="og:title" content="Hulu 2 Reproduction"/>
      <meta name="image" property="og:image" content="https://links.papareact.com/9xl" />
      <meta name="author" content="Mike Stagg" />
      <meta property="og:description" content="This is a reproduction of the Hulu app."/>
      <meta property="og:url" content=""/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}