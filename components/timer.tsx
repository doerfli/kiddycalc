import React, { useEffect }  from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimeoutOverlay from "./timeout_overlay";
import TimerConfig from "./timer_config";
import ChallengeSpecification from "../models/challenge_specification";

interface TimerProps {
    definition: ChallengeSpecification;
}

export default function Timer(props: TimerProps) {

    const [ timerIconColor, setTimerIconColor ] = React.useState("text-neutral-800");
    const [ timerExpiration, setTimerExpiration ] = React.useState(0);
    const [ timerExpired, setTimerExpired ] = React.useState(false);
    const [ showTimerExpiredOverlay, setShowTimerExpiredOverlay ] = React.useState(false);
    const [ showTimerConfigOverlay, setShowTimerConfigOverlay ] = React.useState(false);
    // keep track of the round to identify when it changed. Timer expired overlay should only be shown when round changes. 
    const [ round, setRound ] = React.useState(props.definition.round);
    let intervalTimer: NodeJS.Timer;

    const configureTimer = () => {
        if (timerExpiration > 0) {
            return; // timer is already active
        }

        setShowTimerConfigOverlay(true);
    }

    const engageTimer = (minutes: number) => {
        setShowTimerConfigOverlay(false);
        console.log(minutes);

        if (minutes === 0) {
            return;
        }

        const durationSeconds = minutes * 60;
        const exp = Date.now() + durationSeconds * 1000;
        setTimerExpiration(exp);
        setTimerIconColor("text-emerald-500");
        console.log(`timer set to expire at ${exp}s`);
        
        intervalTimer = setInterval(() => {
            const timeRemaining = (exp - Date.now()) / 1000;
            console.log(`timeRemaining: ${timeRemaining}`);
            if (timeRemaining <= 0) {
                setTimerExpired(true);
                setTimerIconColor("text-red-500 animate-ping");
                clearInterval(intervalTimer);
            } else if (timeRemaining < 15) {
                setTimerIconColor("text-red-500 animate-pulse");
            } else if (timeRemaining < 30) {
                setTimerIconColor("text-red-500");
            } else if (timeRemaining < 45) {
                setTimerIconColor("text-yellow-500");
            }
        }, 1000);
    }

    useEffect(() => {
        if (props.definition.round !== round && timerExpired) {
            setShowTimerExpiredOverlay(true);
        }
        setRound(props.definition.round);
    }, [props.definition.round, round, timerExpired]);

    let timerClass = `fa-fw p-4 text-3xl ${timerIconColor}`;

    if (showTimerExpiredOverlay) {
        timerClass = "invisible";
    }

    return (
        <div>
            <div className="absolute right-0 top-0 z-5">
                <FontAwesomeIcon icon="stopwatch" className={timerClass} onClick={configureTimer}/>
            </div>
            <TimerConfig show={showTimerConfigOverlay} engageTimer={engageTimer}/>
            <TimeoutOverlay show={showTimerExpiredOverlay}/>
        </div> 
    );
}
