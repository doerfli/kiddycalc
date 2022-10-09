import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
// import IconList from '../components/icon_list'

const IconList = dynamic(
    () => import('../components/icon_list'),
    { ssr: false }
)

const Icons: NextPage = () => {
    return (
        <div className="mx-auto container flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>1 + 1 = 2 | Rechnen lernen für die Kleinsten</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <IconList />
        </div>
    )
}

export default Icons
