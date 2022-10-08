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

export default function Game() {
    const [ gameState, dispatch ] = useReducer(gameStateReducer, initialGameState());
    const [ timerExpired, setTimerExpired ] = useState(false);
    
    async function challengeSolved(correct: boolean) {
        console.log("new challenge in 3 seconds");
        await delay(2000);

        if (timerExpired) {
            dispatch({ type: GameActionKind.TIME_IS_UP });
            return;
        }

        dispatch({ type: GameActionKind.NEXT, correctOnFirstAttempt: correct });
        console.log("state updated");
    }

    function onTimerExpired() {
        setTimerExpired(true);
    }

    let gameClass = "game "

    if (gameState.timeIsUp) {
        gameClass += "timer-expired ";
    }

    return (
        <GameContext.Provider value={{ gameState, dispatch }}>
            <div className="app">
                <div className={gameClass}>
                    <Challenge challengeSolved={challengeSolved}/>
                </div>
                <Timer onTimerExpired={onTimerExpired} timeoutOverlayActive={gameState.timeIsUp} />
                <TimeoutOverlay show={gameState.timeIsUp}/>
            </div>
        </GameContext.Provider>
    );
}