import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserSecret,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import Game from '../components/game';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Kiddycalc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4">
        <Game />
      </div>
      
    </div>
  )
}

export default Home
