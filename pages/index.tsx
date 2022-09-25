import type { NextPage } from 'next'
import Head from 'next/head'

import Game from '../components/game';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Kiddycalc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game />
    </div>
  )
}

export default Home
