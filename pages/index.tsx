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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game />

      
    </div>
  )
}

export default Home
