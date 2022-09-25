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
    newChallenge: () => void;
}; 

export default function Challenge(props: ChallengeProps) {

    const successCallback = () => {
        props.newChallenge();
    };

    return (
        <div className="text-lg flex items-center">
            <div className="float-left px-4">
                <Number number={props.number1} />
            </div>
            <div className="float-left px-4 text-lg align-middle">
            <FontAwesomeIcon icon="plus" className="text-5xl" />
            </div>
            <div className="float-left px-4">
                <Number number={props.number2} />
            </div>
            <div className="float-left px-4">
                <FontAwesomeIcon icon="equals" className="text-5xl" />
            </div>
            <div className="float-left px-4">
                <ResultSelector result={props.number1 + props.number2} successCallback={successCallback} />
            </div>
        </div>
    );

}
