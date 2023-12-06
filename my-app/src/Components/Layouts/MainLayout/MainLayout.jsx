import React from 'react'
import Head from "next/head";
import bg from '../../../../public/brand/bg.png'
import Image from 'next/image';
import Link from 'next/link';

const MainLayout = ({ children }) => {

  const title = "JASWILL_WEB";

//   if (Component.Container) {
//     return(
//       <>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <Component.Container>
//         <Component {...pageProps} />
//       </Component.Container>
//       </>
//     )
//   }

  return (
 
    <React.Fragment>
      <Head>
      <link rel="icon" sizes="192x192" href="brand/bg.png" />
          <link rel="icon" type="image/png" href="brand/bg.png" />
          <link rel="icon" sizes="128x128" href="/brand/bg.png" />
        
        <title>{title}</title>
      </Head>
        {children}
    </React.Fragment>

  )
}

export default MainLayout