import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Andres Coello Goyes</title>
        <link
          rel="icon"
          sizes="192x192"
          href="https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj"
        />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="robots" content="index" />
        <meta
          property="og:image"
          content="https://yt3.ggpht.com/lRRy0GQ0LR49qNODT8Th5OLC-FgqD05VShVPjtZtjc_zlCFR5QoXVUIr3JBHZSq-5_UqCUKkDQ=s88-c-k-c0x00ffffff-no-rj"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
