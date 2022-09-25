import React, { useState }  from "react";
import arrayShuffle from 'array-shuffle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconBlock from "./icon_block";
import { resourceLimits } from "worker_threads";

interface ResultChooserProps {
    result: number;
    successCallback: () => void;
}; 

export default function ResultSelector(props: ResultChooserProps) {
    // generate 3 results to select from (one being the correct one)
    let results = [props.result];
    while (results.length < 3) {
        // Generate a random number between 2 below and 2 above the result
        const newResult = props.result + 2 - Math.floor(Math.random() * 5);
        
        if (newResult <= 0) {
            continue;
        }

        if (results.includes(newResult)) {
            continue;
        }

        results.push(newResult);
    }

    const choices = arrayShuffle(results);

    function checkResult(result: number, wasSuccessful: any): any {
        const correct = result === props.result;
        console.log(correct);
        wasSuccessful(correct);

        if (correct) {
            props.successCallback();
        }
    }

    return (
        <div className="flex flex-cols-3 gap-4 items-center">
            <div>
                <IconBlock 
                    icon="car" 
                    number={choices[0]} 
                    colorClass="bg-yellow-300 hover:bg-yellow-500" 
                    class="mr-8"
                    onClickHandler={checkResult}
                    onClickValue={choices[0]}
                    />
            </div>
            <div>
                <IconBlock 
                    icon="car" 
                    number={choices[1]} 
                    colorClass="bg-yellow-300 hover:bg-yellow-500" 
                    class="mr-8"
                    onClickHandler={checkResult}
                    onClickValue={choices[1]}
                    />
            </div>
            <div>
                <IconBlock 
                    icon="car" 
                    number={choices[2]} 
                    colorClass="bg-yellow-300 hover:bg-yellow-500" 
                    onClickHandler={checkResult}
                    onClickValue={choices[2]}
                    />
            </div>
        </div>
    );

}
