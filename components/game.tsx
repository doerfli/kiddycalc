import React, { useReducer, useState }  from "react";
import dynamic from 'next/dynamic'
import delay from "../utils/delay";
import { GameActionKind, GameContext, gameStateReducer, newGameState } from "../models/game_context";

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
    const [ gameState, dispatch ] = useReducer(gameStateReducer, newGameState());
    const [ timerExpired, setTimerExpired ] = useState(false);
    const [ timeoutOverlayActive, setTimeoutOverlayActive ] = useState(false);
    
    async function challengeSolved() {
        if (timerExpired) {
            setTimeoutOverlayActive(true);
            return;
        }

        console.log("new challenge in 3 seconds");
        await delay(2000);
        dispatch({ type: GameActionKind.NEXT });
        console.log("state updated");
    }

    function onTimerExpired() {
        setTimerExpired(true);
    }

    let gameClass = "game "

    if (timeoutOverlayActive) {
        gameClass += "timer-expired ";
    }

    return (
        <GameContext.Provider value={{ gameState, dispatch }}>
            <div className="app">
                <div className={gameClass}>
                    <Challenge challengeSolved={challengeSolved}/>
                </div>
                <Timer onTimerExpired={onTimerExpired} timeoutOverlayActive={timeoutOverlayActive} />
                <TimeoutOverlay show={timeoutOverlayActive}/>
            </div>
        </GameContext.Provider>
    );
}