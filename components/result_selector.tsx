import React, { useEffect, useState }  from "react";
import arrayShuffle from 'array-shuffle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconBlock from "./icon_block";
import { resourceLimits } from "worker_threads";

interface ResultChooserProps {
    result: number;
    onSuccess: () => void;
}; 

const generateResults = (result: number) => {
    let results = [result];
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

export default function ResultSelector(props: ResultChooserProps) {
    // generate 3 results to select from (one being the correct one)

    useEffect(() => {
        setChoices(generateResults(props.result));
        setColorClass1("result_initial_1");
        setColorClass2("result_initial_2");
        setColorClass3("result_initial_3");
    }, [props.result]);

    const [ choices, setChoices ] = useState(generateResults(props.result));
    const [ colorClass1, setColorClass1 ] = useState("result_initial_1");
    const [ colorClass2, setColorClass2 ] = useState("result_initial_2");
    const [ colorClass3, setColorClass3 ] = useState("result_initial_3");

    function validateResult(result: number, setColorToIconBlock: (colorClass: string) => void): any {
        const correct = result === props.result;
        console.log(correct);
        
        if (correct) {
            setColorToIconBlock("result_success");
            props.onSuccess();
        } else {
            setColorToIconBlock("result_fail");
        }
    }

    return (
        <div className="flex flex-cols-3 gap-4 items-center">
            <div>
                <IconBlock 
                    icon="car" 
                    number={choices[0]} 
                    colorClass={colorClass1} 
                    class="mr-4"
                    onClickHandler={() => validateResult(choices[0], setColorClass1)}
                    />
            </div>
            <div>
                <IconBlock 
                    icon="car" 
                    number={choices[1]} 
                    colorClass={colorClass2}
                    class="mr-4"
                    onClickHandler={() => validateResult(choices[1], setColorClass2)}
                    />
            </div>
            <div>
                <IconBlock 
                    icon="car" 
                    number={choices[2]} 
                    colorClass={colorClass3}
                    onClickHandler={() => validateResult(choices[2], setColorClass3)}
                    />
            </div>
        </div>
    );

}
