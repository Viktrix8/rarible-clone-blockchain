import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rarible Clone - Create, sell or collect NFTs</title>
        <link rel="shortcut icon" href="/logo.jpg" />
      </Head>
      <Header />
      {/* <Feed /> */}
    </div>
  )
}

export default Home
