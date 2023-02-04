import React  from "react";
import dynamic from 'next/dynamic'
import delay from "../utils/delay";
import { useDispatch, useSelector } from "react-redux";
import { nextChallenge, spinStart, spinStop, timeIsUp } from "../redux/slices/game";
import { RootState } from "../redux/store";

const Challenge = dynamic(
    () => import('./challenge'),
    { ssr: false }
)

const Timer = dynamic(
    () => import('./timer'),
    { ssr: false }
)

const TimeoutOverlay = dynamic(
    () => import('./timeout_overlay'),
    { ssr: false }
)

export default function Game() {
    const dispatch  = useDispatch();
    const spin = useSelector((state: RootState) => state.game.spin);
    const timerExpired = useSelector((state: RootState) => state.game.timerExpired);
    const [ showTimerExpired, setShowTimerExpired ] = React.useState(false);
    
    console.log("render game");

    async function challengeSolved(correct: boolean) {
        console.log("new challenge in 2 seconds");
        await delay(2000);

        dispatch(spinStart());
        console.log("spin starting");

        await delay(650);
        // now the challange is gone (animation takes 600ms to hide challenge)
        
        if (timerExpired) {
            setShowTimerExpired(true);
        } else {
            dispatch(nextChallenge(correct));
        }

        await delay(850);
        // remove spin class after spin finished
        dispatch(spinStop());
    }

    function onTimerExpired() {
        dispatch(timeIsUp());
    }

    let gameClass = " "

    if (spin) {
        gameClass += "animate-spin-out-in ";
    }

    let challengeClass = "game "

    if (showTimerExpired) {
        challengeClass += "timer-expired ";
    }


    return (
        <div className={gameClass}>
            <div className={challengeClass}>
                <Challenge challengeSolved={challengeSolved}/>
            </div>
            <Timer onTimerExpired={onTimerExpired} timeoutOverlayActive={timerExpired} />
            <TimeoutOverlay show={showTimerExpired}/>
        </div>
    );
}