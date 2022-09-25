import React, { useState }  from "react";
import dynamic from 'next/dynamic'

const Challenge = dynamic(
    () => import('./challenge'),
    { ssr: false }
)


export default function Game() {
    const [ number1, setNumber1 ] = useState(Math.ceil(Math.random() * 5));
    const [ number2, setNumber2 ] = useState(Math.ceil(Math.random() * 5));

    return (
        <div className="game">
            <Challenge number1={number1} number2={number2} />
        </div>
    );
}