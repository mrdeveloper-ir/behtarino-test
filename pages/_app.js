import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
