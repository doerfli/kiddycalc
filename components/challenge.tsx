import React, { useContext } from "react";
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GameContext } from "../models/game_context";
import InputBlock from "./input_block";

const ResultSelector = dynamic(
    () => import('./result_selector'),
    { ssr: false }
)

interface ChallengeProps {
    challengeSolved: (correct: boolean) => void;
}

export default function Challenge(props: ChallengeProps) {
    const { gameState } = useContext(GameContext) as GameContext;
    
    return (
        <div className="challenge">
            <div className="challenge_element">
                <InputBlock number={gameState.challenge.number1} icon={gameState.challenge.icon} type={gameState.challenge.inputType1} />
            </div>
            <div className="challenge_element">
                <FontAwesomeIcon icon="plus" className="icon_operator" />
            </div>
            <div className="challenge_element">
                <InputBlock number={gameState.challenge.number2} icon={gameState.challenge.icon} type={gameState.challenge.inputType2} />
            </div>
            <div className="challenge_element">
                <FontAwesomeIcon icon="equals" className="icon_operator" />
            </div>
            <div className="challenge_element">
                <ResultSelector onSuccess={props.challengeSolved} />
            </div>
        </div>
    );

}
