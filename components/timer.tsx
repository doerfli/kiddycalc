import React  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeoutOverlay from "./timeout_overlay";
import TimerConfig from "./timer_config";

export default function Timer() {

    const [ timerExpiration, setTimerExpiration ] = React.useState(0);
    const [ timerExpired, setTimerExpired ] = React.useState(false);
    const [ showTimerConfig, setShowTimerConfig ] = React.useState(false);
    const [ timerColor, setTimerColor ] = React.useState("text-neutral-800");
    let intervalTimer: NodeJS.Timer;

    const configureTimer = () => {
        if (timerExpiration > 0) {
            return; // timer is already active
        }

        setShowTimerConfig(true);
    }

    const engageTimer = (minutes: number) => {
        setShowTimerConfig(false);
        console.log(minutes);

        if (minutes === 0) {
            return;
        }

        const durationSeconds = minutes * 60;
        const exp = Date.now() + durationSeconds * 1000;
        setTimerExpiration(exp);
        setTimerColor("text-emerald-500");
        console.log(`timer set to expire at ${exp}s`);
        
        intervalTimer = setInterval(() => {
            const timeRemaining = (exp - Date.now()) / 1000;
            console.log(`timeRemaining: ${timeRemaining}`);
            if (timeRemaining <= 0) {
                setTimerExpired(true);
                clearInterval(intervalTimer);
            } else if (timeRemaining < 30) {
                setTimerColor("text-red-500");
            } else if (timeRemaining < 45) {
                setTimerColor("text-yellow-500");
            }
        }, 1000);
    }

    const timerClass = `fa-fw p-4 text-3xl ${timerColor}`;

    return (
        <div>
            <div className="absolute right-0 top-0 z-5">
                <FontAwesomeIcon icon="stopwatch" className={timerClass} onClick={configureTimer}/>
            </div>
            <TimerConfig show={showTimerConfig} engageTimer={engageTimer}/>
            <TimeoutOverlay show={timerExpired}/>
        </div> 
    );
}
