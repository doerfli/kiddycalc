import React, { useContext, useEffect, useState }  from "react";
import arrayShuffle from 'array-shuffle';
import IconBlock from "./number/icon_block";
import { GameContext } from "../models/game_context";

const SUCCESS_ANIMATIONS = [
    "success_animation_1",
    "success_animation_2",
    "success_animation_3",
    "success_animation_4",
    "success_animation_5",
];

interface ResultChooserProps {
    onSuccess: () => void;
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

    useEffect(() => {
        setChoices(generateResults(gameState.challenge.result));
        setColorClass1("");
        setColorClass2("");
        setColorClass3("");
    }, [gameState.challenge]);

    // generate 3 results to select from (one being the correct one)
    const [ choices, setChoices ] = useState(generateResults(gameState.challenge.result));
    const [ colorClass1, setColorClass1 ] = useState("");
    const [ colorClass2, setColorClass2 ] = useState("");
    const [ colorClass3, setColorClass3 ] = useState("");

    function validateResult(result: number, setColorToIconBlock: (colorClass: string) => void): any {
        const correct = result === gameState.challenge.result;
        console.log(correct);
        
        if (correct) {
            // hide all
            setColorClass1("result_invisible");
            setColorClass2("result_invisible");
            setColorClass3("result_invisible");
            // mark correct block as success
            setColorToIconBlock("result_success " + randomSuccessAnimation());
            props.onSuccess();
        } else {
            setColorToIconBlock("result_fail");
        }
    }

    return (
        <div className="result_selector">
            <IconBlock 
                icon={gameState.challenge.icon}
                number={choices[0]} 
                colorClass={colorClass1} 
                class="mr-2"
                onClickHandler={() => validateResult(choices[0], setColorClass1)}
                />
            <IconBlock 
                icon={gameState.challenge.icon}
                number={choices[1]} 
                colorClass={colorClass2}
                class="mr-2"
                onClickHandler={() => validateResult(choices[1], setColorClass2)}
                />
            <IconBlock 
                icon={gameState.challenge.icon}
                number={choices[2]} 
                colorClass={colorClass3}
                onClickHandler={() => validateResult(choices[2], setColorClass3)}
                />
        </div>
    );

}
