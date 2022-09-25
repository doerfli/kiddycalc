import React, { useState }  from "react";
import arrayShuffle from 'array-shuffle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconBlock from "./icon_block";
import { resourceLimits } from "worker_threads";

interface ResultChooserProps {
    result: number;
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

    const [ expectedResult ] = useState(props.result);
    const [ choices ] = useState(arrayShuffle(results));

    return (
        <div className="flex flex-cols-3 gap-4 items-center">
            <div>
                <IconBlock icon="car" number={choices[0]} class="result_block mr-8" />
            </div>
            <div>
                <IconBlock icon="car" number={choices[1]} class="result_block mr-8" />
            </div>
            <div>
                <IconBlock icon="car" number={choices[2]} class="result_block" />
            </div>
        </div>
    );

}
