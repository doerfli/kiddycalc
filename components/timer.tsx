import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimerConfig from "./timer_config";

interface TimerProps {
    onTimerExpired: () => void;
    timeoutOverlayActive: boolean;
}

export default function Timer(props: TimerProps) {
    const [ timerIconColor, setTimerIconColor ] = React.useState("text-neutral-800");
    const [ timerExpiration, setTimerExpiration ] = React.useState(0);
    const [ showTimerConfigOverlay, setShowTimerConfigOverlay ] = React.useState(false);
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

        const durationSeconds = minutes * 20;
        const exp = Date.now() + durationSeconds * 1000;
        setTimerExpiration(exp);
        setTimerIconColor("text-emerald-500");
        console.log(`timer set to expire at ${exp}s`);
        
        intervalTimer = setInterval(() => {
            const timeRemaining = (exp - Date.now()) / 1000;
            console.log(`timeRemaining: ${timeRemaining}`);
            if (timeRemaining <= 0) {
                setTimerIconColor("text-red-500 animate-ping");
                clearInterval(intervalTimer);
                props.onTimerExpired();
            } else if (timeRemaining < 15) {
                setTimerIconColor("text-red-500 animate-pulse");
            } else if (timeRemaining < 30) {
                setTimerIconColor("text-red-500");
            } else if (timeRemaining < 45) {
                setTimerIconColor("text-yellow-500");
            }
        }, 1000);
    }

    let timerClass = `fa-fw p-4 text-3xl ${timerIconColor} `;

    if (props.timeoutOverlayActive) {
        timerClass = "invisible";
    }

    return (
        <div>
            <div className="absolute right-0 top-0 z-5">
                <FontAwesomeIcon icon="stopwatch" className={timerClass} onClick={configureTimer}/>
            </div>
            <TimerConfig show={showTimerConfigOverlay} engageTimer={engageTimer}/>
        </div> 
    );
}
