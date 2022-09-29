import React, { useState }  from "react";
import dynamic from 'next/dynamic'
import delay from "../utils/delay";
import ChallengeSpecification from "../models/challenge_specification";
import { getRandomIcon } from "../utils/icons";

const Challenge = dynamic(
    () => import('./challenge'),
    { ssr: false }
)

const Timer = dynamic(
    () => import('./timer'),
    { ssr: false }
)

const newChallengeDefinition = (): ChallengeSpecification => {
    const n1 = Math.ceil(Math.random() * 5);
    const n2 = Math.ceil(Math.random() * 5);
    return { 
        number1: n1,
        number2: n2,
        result: n1 + n2,
        icon: getRandomIcon()
    } as ChallengeSpecification;
}

export default function Game() {
    const [ challendeDefinition, setChallengeDefinition ] = useState(newChallengeDefinition());

    async function newChallenge() {
        console.log("new challenge in 3 seconds");
        await delay(2000);
        setChallengeDefinition(newChallengeDefinition());
        console.log("state updated");
    }

    return (
        <div className="app">
            <div className="game">
                <Challenge definition={challendeDefinition} challengeSolved={newChallenge}/>
            </div>
            <Timer />
        </div>
    );
}