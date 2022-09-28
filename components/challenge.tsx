import React from "react";
import dynamic from 'next/dynamic'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChallengeSpecification from "../models/challenge_specification";


const Number = dynamic(
    () => import('./number'),
    { ssr: false }
)

const ResultSelector = dynamic(
    () => import('./result_selector'),
    { ssr: false }
)

interface ChallengeProps {
    definition: ChallengeSpecification;
    challengeSolved: () => void;
}

export default function Challenge(props: ChallengeProps) {

    return (
        <div className="challenge">
            <div className="challenge_element">
                <Number number={props.definition.number1} icon={props.definition.icon} />
            </div>
            <div className="challenge_element">
                <FontAwesomeIcon icon="plus" className="icon_operator" />
            </div>
            <div className="challenge_element">
                <Number number={props.definition.number2} icon={props.definition.icon} />
            </div>
            <div className="challenge_element">
                <FontAwesomeIcon icon="equals" className="icon_operator" />
            </div>
            <div className="challenge_element">
                <ResultSelector definition={props.definition} onSuccess={props.challengeSolved} />
            </div>
        </div>
    );

}
