import React, { useContext, useEffect, useState }  from "react";
import arrayShuffle from 'array-shuffle';
import { GameContext } from "../models/game_context";
import NumberElement from "./number/number_element";

const SUCCESS_ANIMATIONS = [
    "success_animation_1",
    "success_animation_2",
    "success_animation_3",
    "success_animation_4",
    "success_animation_5",
];

interface ResultChooserProps {
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

const randomSuccessAnimation = () => {
    return SUCCESS_ANIMATIONS[Math.floor(Math.random() * SUCCESS_ANIMATIONS.length)];
}

export default function ResultSelector(props: ResultChooserProps) {
    const { gameState } = useContext(GameContext) as GameContext;
    const [ tries, setTries ] = useState(0);

    // generate 3 results to select from (one being the correct one)
    const [ choices, setChoices ] = useState([] as number[]);
    const [ colorClass1, setColorClass1 ] = useState("");
    const [ colorClass2, setColorClass2 ] = useState("");
    const [ colorClass3, setColorClass3 ] = useState("");

    useEffect(() => {
        // reset result selector
        setChoices(generateResults(gameState.challenge.result));
        setColorClass1("");
        setColorClass2("");
        setColorClass3("");
        setTries(0);
    }, [gameState.challenge]);

    function validateResult(result: number, setColorToIconBlock: (colorClass: string) => void): any {
        const correct = result === gameState.challenge.result;
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
                type={gameState.challenge.resultType1}
                icon={gameState.challenge.icon}
                number={choices[0]} 
                colorClass={colorClass1} 
                class="mr-2"
                onClickHandler={() => validateResult(choices[0], setColorClass1)}
                />
            <NumberElement 
                type={gameState.challenge.resultType2}
                icon={gameState.challenge.icon}
                number={choices[1]} 
                colorClass={colorClass2}
                class="mr-2"
                onClickHandler={() => validateResult(choices[1], setColorClass2)}
                />
            <NumberElement 
                type={gameState.challenge.resultType3}
                icon={gameState.challenge.icon}
                number={choices[2]} 
                colorClass={colorClass3}
                onClickHandler={() => validateResult(choices[2], setColorClass3)}
                />
        </div>
    );

}
