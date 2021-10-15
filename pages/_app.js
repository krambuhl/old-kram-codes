import React from 'react'
import Head from 'next/head'
import { PageLayout } from 'components'
import 'styles/index.css'

export default function CustomApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>kram.codes</title>
      </Head>

      <PageLayout
        pageProps={pageProps}
        Component={Component}
      />
    </React.Fragment>
  )
}
