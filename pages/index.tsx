import type { NextPage } from 'next'
import Head from 'next/head'

import Game from '../components/game';

const Home: NextPage = () => {
  console.log("game page");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>1 + 1 = 2 | Rechnen lernen für die Kleinsten</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Game />
    </div>
  )
}

export default Home
