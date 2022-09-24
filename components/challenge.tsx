import React, { useState }  from "react";

interface ChallengeProps {
    number1: number;
    number2: number;
}; 

export default function Challenge(props: ChallengeProps) {
    const [ number1, setNumber1 ] = useState(props.number1);
    const [ number2, setNumber2 ] = useState(props.number2);

    return (
        <div className="challenge">
            
        </div>
    );

}
