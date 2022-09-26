import React, { useState }  from "react";
import dynamic from 'next/dynamic'
import delay from "../utils/delay";
import { setMaxListeners } from "events";
import mitt from "next/dist/shared/lib/mitt";

const Challenge = dynamic(
    () => import('./challenge'),
    { ssr: false }
)

export default function Game() {
    const [ number1, setNumber1 ] = useState(Math.ceil(Math.random() * 5));
    const [ number2, setNumber2 ] = useState(Math.ceil(Math.random() * 5));
    const [ result, setResult ] = useState(number1 + number2);

    async function newChallenge() {
        console.log("new challenge in 3 seconds");
        await delay(2000);
        setNumber1(0);
        await delay(10);
        setNumber1(Math.ceil(Math.random() * 5));
        setNumber2(Math.ceil(Math.random() * 5));
        setResult(number1 + number2);
        console.log("state updated");
    }

    return (
        <div className="game">
            <Challenge number1={number1} number2={number2} challengeSolved={newChallenge}/>
        </div>
    );
}