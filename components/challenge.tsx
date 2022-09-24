import React, { useState }  from "react";
// import Number from "./number";
import dynamic from 'next/dynamic'

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
        <div>
            <Number number={number1} />
            +
            <Number number={number2} />
            =
            ?
        </div>
    );

}
