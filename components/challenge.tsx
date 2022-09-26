import React, { useState }  from "react";
import dynamic from 'next/dynamic'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Number = dynamic(
    () => import('./number'),
    { ssr: false }
)

const ResultSelector = dynamic(
    () => import('./result_selector'),
    { ssr: false }
)

interface ChallengeProps {
    number1: number;
    number2: number;
    challengeSolved: () => void;
}; 

export default function Challenge(props: ChallengeProps) {

    return (
        <div className="text-lg flex items-center">
            <div className="float-left px-2">
                <Number number={props.number1} />
            </div>
            <div className="float-left px-2 align-middle">
                <FontAwesomeIcon icon="plus" className="icon_operator" />
            </div>
            <div className="float-left px-2">
                <Number number={props.number2} />
            </div>
            <div className="float-left px-2">
                <FontAwesomeIcon icon="equals" className="icon_operator" />
            </div>
            <div className="float-left px-2">
                <ResultSelector result={props.number1 + props.number2} onSuccess={props.challengeSolved} />
            </div>
        </div>
    );

}
