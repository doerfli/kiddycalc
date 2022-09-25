import React, { useState }  from "react";
// import Number from "./number";
import dynamic from 'next/dynamic'

import {
    faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// TODO make ssr work again
const Number = dynamic(
    () => import('./number'),
    { ssr: false }
)

interface ChallengeProps {
    number1: number;
    number2: number;
}; 

export default function Challenge(props: ChallengeProps) {
    const [ number1, setNumber1 ] = useState(props.number1);
    const [ number2, setNumber2 ] = useState(props.number2);

    return (
        <div className="text-lg">
            <div className="float-left px-4">
                <Number number={number1} />
            </div>
            <div className="float-left px-4 text-lg">
                <p className="text-6xl">+</p>
            </div>
            <div className="float-left px-4">
                <Number number={number2} />
            </div>
            <div className="float-left px-4">
                <p className="text-6xl">=</p>
            </div>
            <div className="float-left px-4">
                <span className="text-6xl">?&nbsp;</span>
                <FontAwesomeIcon className="text-6xl" icon={faCar} />
            </div>            
        </div>
    );

}
