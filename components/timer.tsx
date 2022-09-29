import React  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeoutOverlay from "./timeout_overlay";
import TimerConfig from "./timer_config";

export default function Timer() {

    const [ timerExpiration, setTimerExpiration ] = React.useState(0);
    const [ timerExpired, setTimerExpired ] = React.useState(false);
    const [ showTimerConfig, setShowTimerConfig ] = React.useState(false);
    let intervalTimer: NodeJS.Timer;

    const configureTimer = () => {
        if (timerExpiration > 0) {
            return; // timer is already active
        }

        setShowTimerConfig(true);
    }

    const engageTimer = (minutes: number) => {
        if (minutes === 0) {
            return;
        }

        setShowTimerConfig(false);
        console.log(minutes);
        const durationSeconds = minutes * 10;
        const exp = Date.now() + durationSeconds * 1000;
        setTimerExpiration(exp);
        console.log(`timer set to expire at ${exp}s`);
        
        intervalTimer = setInterval(() => {
            const timeRemaining = (exp - Date.now()) / 1000;
            console.log(`timeRemaining: ${timeRemaining}`);
            if (timeRemaining <= 0) {
                setTimerExpired(true);
                clearInterval(intervalTimer);
            }
        }, 1000);
    }

    return (
        <div>
            <div className="absolute right-0 top-0 z-5">
                <FontAwesomeIcon icon="stopwatch" className="fa-fw p-4 text-3xl text-neutral-800" onClick={configureTimer}/>
            </div>
            <TimerConfig show={showTimerConfig} engageTimer={engageTimer}/>
            <TimeoutOverlay show={timerExpired}/>
        </div> 
    );
}
