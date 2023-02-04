import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import Game from '../../components/game';
import { setLevel } from '../../redux/slices/game';

const Level: NextPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    let game = (<div></div>);

    if (router.isReady) {
        const levelStr = router.query.level;
        console.log(levelStr);
        setTimeout(() => {
            dispatch(setLevel(parseInt(levelStr as string)));
        }, 10);
        game = (<Game />)
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
            <title>1 + 1 = 2 | Rechnen lernen für die Kleinsten</title>
            <link rel="icon" href="/favicon.svg" />
            </Head>

            {game}
        </div>
    )
}

export default Level
