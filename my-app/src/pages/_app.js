import '@/styles/globals.css'
import React from 'react'
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const title = "JASWILL_WEB";
  if (Component.Container) {
    return(
      <>
      <Head>
        <title>{title}</title>
      </Head>
      <Component.Container>
        <Component {...pageProps} />
      </Component.Container>
      </>
    )
  }


return (
  <div>
    <React.Fragment>
      <Head>
      <link rel="icon" sizes="192x192" href="/public/img/brand/favicon.ico" />
          <link rel="icon" type="image/png" href="/public/img/brand/favicon.ico" />
          <link rel="icon" sizes="128x128" href="/public/img/brand/favicon.ico" />
        
        <title>{title}</title>
      </Head>
        <Component {...pageProps} />
    </React.Fragment>
  </div>
)
}


