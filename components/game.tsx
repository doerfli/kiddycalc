import React, { useReducer, useState }  from "react";
import dynamic from 'next/dynamic'
import delay from "../utils/delay";
import { GameActionKind, GameContext, gameStateReducer } from "../models/game_context";
import { initialGameState } from "../models/game_state";

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

interface GameProps {
    level?: number;
}

export default function Game(props: GameProps) {
    const [ gameState, dispatch ] = useReducer(gameStateReducer, initialGameState(props.level || 1));
    const [ timerExpired, setTimerExpired ] = useState(false);
    
    async function challengeSolved(correct: boolean) {
        console.log("new challenge in 2 seconds");
        await delay(2000);

        dispatch({ type: GameActionKind.SPIN_START });
        console.log("spin starting");

        await delay(650);
        // now the challange is gone (animation takes 600ms to hide challenge)
        
        if (timerExpired) {
            dispatch({ type: GameActionKind.TIME_IS_UP });
        } else {
            dispatch({ type: GameActionKind.NEXT_CHALLENGE, correctOnFirstAttempt: correct });
        }

        await delay(850);
        // remove spin class after spin finished
        dispatch({ type: GameActionKind.SPIN_STOP });
    }

    function onTimerExpired() {
        setTimerExpired(true);
    }

    let gameClass = " "

    if (gameState.spin) {
        gameClass += "animate-spin-out-in ";
    }

    let challengeClass = "game "

    if (gameState.timeIsUp) {
        challengeClass += "timer-expired ";
    }


    return (
        <GameContext.Provider value={{ gameState, dispatch }}>
            <div className={gameClass}>
                <div className={challengeClass}>
                    <Challenge challengeSolved={challengeSolved}/>
                </div>
                <Timer onTimerExpired={onTimerExpired} timeoutOverlayActive={gameState.timeIsUp} />
                <TimeoutOverlay show={gameState.timeIsUp}/>
            </div>
        </GameContext.Provider>
    );
}