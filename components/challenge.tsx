import React, { useState }  from "react";
import dynamic from 'next/dynamic'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Number = dynamic(
    () => import('./number'),
    { ssr: false }
)

const ResultChooser = dynamic(
    () => import('./result_chooser'),
    { ssr: false }
)

interface ChallengeProps {
    number1: number;
    number2: number;
    result: number;
}; 

export default function Challenge(props: ChallengeProps) {
    const [ number1, setNumber1 ] = useState(props.number1);
    const [ number2, setNumber2 ] = useState(props.number2);
    const [ result, setResult ] = useState(props.result);

    return (
        <div className="text-lg flex items-center">
            <div className="float-left px-4">
                <Number number={number1} />
            </div>
            <div className="float-left px-4 text-lg align-middle">
                <p className="text-6xl">+</p>
            </div>
            <div className="float-left px-4">
                <Number number={number2} />
            </div>
            <div className="float-left px-4">
                <p className="text-6xl">=</p>
            </div>
            <div className="float-left px-4">
                <ResultChooser result={result} />
            </div>
        </div>
    );

}
