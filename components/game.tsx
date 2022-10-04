import React, { useState }  from "react";
import dynamic from 'next/dynamic'
import delay from "../utils/delay";
import { GameContext, newGameState } from "../models/game_context";

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
    const [ gameState, setGameState ] = useState(newGameState());
    const [ timerExpired, setTimerExpired ] = useState(false);
    const [ timeoutOverlayActive, setTimeoutOverlayActive ] = useState(false);
    
    async function challengeSolved() {
        if (timerExpired) {
            setTimeoutOverlayActive(true);
            return;
        }

        console.log("new challenge in 3 seconds");
        await delay(2000);
        setGameState(newGameState());
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
        <GameContext.Provider value={{ gameState, setGameState }}>
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