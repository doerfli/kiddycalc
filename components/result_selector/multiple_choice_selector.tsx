import React, { useEffect, useState }  from "react";
import arrayShuffle from 'array-shuffle';
import NumberElement from "../number/number_element";
import ChallengeSpecification from "../../models/challenge_specification";
import { randomSuccessAnimation } from "./result_selector";


interface MultileChoiceSelectorProps {
    challenge: ChallengeSpecification;
    onSuccess: (correct: boolean) => void;
}

const generateResults = (result: number) => {
    const results = [result];
    while (results.length < 3) {
        // Generate a random number between 2 below and 2 above the result
        const newResult = result + 2 - Math.floor(Math.random() * 5);
        
        if (newResult <= 0) {
            continue;
        }

        if (results.includes(newResult)) {
            continue;
        }

        results.push(newResult);
    }
    return arrayShuffle(results);
}



export default function MultipleChoiceSelector(props: MultileChoiceSelectorProps) {
    const challenge = props.challenge;
    const [ tries, setTries ] = useState(0);

    // generate 3 results to select from (one being the correct one)
    const [ choices, setChoices ] = useState([] as number[]);
    const [ colorClass1, setColorClass1 ] = useState("");
    const [ colorClass2, setColorClass2 ] = useState("");
    const [ colorClass3, setColorClass3 ] = useState("");

    useEffect(() => {
        // reset result selector
        setChoices(generateResults(challenge.result));
        setColorClass1("");
        setColorClass2("");
        setColorClass3("");
        setTries(0);
    }, [challenge]);

    function validateResult(result: number, setColorToIconBlock: (colorClass: string) => void): void {
        const correct = result === challenge.result;
        console.log(correct);
        const newTries = tries + 1;
        setTries(newTries);
        
        if (correct) {
            // hide all
            setColorClass1("result_invisible");
            setColorClass2("result_invisible");
            setColorClass3("result_invisible");
            // mark correct block as success
            setColorToIconBlock("result_success " + randomSuccessAnimation());
            props.onSuccess(newTries == 1);
        } else {
            setColorToIconBlock("result_fail");
        }
    }

    return (
        <div className="result_selector">
            <NumberElement 
                type={challenge.resultType1}
                icon={challenge.icon}
                number={choices[0]} 
                colorClass={colorClass1} 
                class="mr-2"
                onClickHandler={() => validateResult(choices[0], setColorClass1)}
                />
            <NumberElement 
                type={challenge.resultType2}
                icon={challenge.icon}
                number={choices[1]} 
                colorClass={colorClass2}
                class="mr-2"
                onClickHandler={() => validateResult(choices[1], setColorClass2)}
                />
            <NumberElement 
                type={challenge.resultType3}
                icon={challenge.icon}
                number={choices[2]} 
                colorClass={colorClass3}
                class="mr-2"
                onClickHandler={() => validateResult(choices[2], setColorClass3)}
                />
        </div>
    );

}
