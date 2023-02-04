import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimerConfig from "./timer_config";

interface TimerProps {
    onTimerExpired: () => void;
    timeoutOverlayActive: boolean;
}

export default function Timer(props: TimerProps) {
    const [ timerIconColor, setTimerIconColor ] = React.useState("text-pastel-cream");
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

        const durationSeconds = minutes * 10;
        const exp = Date.now() + durationSeconds * 1000;
        setTimerExpiration(exp);
        setTimerIconColor("text-pastel-green");
        console.log(`timer set to expire at ${exp}s`);
        
        intervalTimer = setInterval(() => {
            const timeRemaining = (exp - Date.now()) / 1000;
            console.log(`timeRemaining: ${timeRemaining}`);
            if (timeRemaining <= 0) {
                setTimerIconColor("text-pastel-red animate-ping");
                clearInterval(intervalTimer);
                props.onTimerExpired();
            } else if (timeRemaining < 15) {
                setTimerIconColor("text-pastel-red animate-pulse");
            } else if (timeRemaining < 30) {
                setTimerIconColor("text-pastel-red");
            } else if (timeRemaining < 45) {
                setTimerIconColor("text-pastel-yellow");
            }
        }, 1000);
    }

    let timerClass = `fa-fw p-4 text-3xl ${timerIconColor} `;

    if (props.timeoutOverlayActive) {
        timerClass = "invisible";
    }

    return (
        <div>
            <div className="absolute right-0 top-0 z-5 text-pastel-cream">
                <FontAwesomeIcon icon="stopwatch" className={timerClass} onClick={configureTimer}/>
            </div>
            <TimerConfig show={showTimerConfigOverlay} engageTimer={engageTimer}/>
        </div> 
    );
}
