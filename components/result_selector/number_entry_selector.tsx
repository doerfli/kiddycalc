import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState }  from "react";
import ChallengeSpecification from "../../models/challenge_specification";
import { randomSuccessAnimation } from "./result_selector";


interface NumberEntrySelectorProps {
    challenge: ChallengeSpecification;
    onSuccess: (correct: boolean) => void;
}

const EMPTY_RESULT = "__";

export default function NumberEntrySelector(props: NumberEntrySelectorProps) {
    const challenge = props.challenge;
    const [ tries, setTries ] = useState(0);
    const [ guess, setGuess ] = useState(EMPTY_RESULT);
    const [ success, setSuccess ] = useState(false);
    const [ fail, setFail ] = useState(false);

    function validateResult(result: number): void {
        const correct = result === challenge.result;
        console.log(correct);
        const newTries = tries + 1;
        setTries(newTries);
        
        if (correct) {
            // // hide all
            // setColorClass1("result_invisible");
            // setColorClass2("result_invisible");
            // setColorClass3("result_invisible");
            // // mark correct block as success
            // setColorToIconBlock("result_success " + randomSuccessAnimation());
            setSuccess(true);
            props.onSuccess(newTries == 1);
        } else {
            setFail(true);
            // setColorToIconBlock("result_fail");
        }
    }

    function numberSelected(number: number) {
        if (success) {
            return;
        }

        let currentGuess = guess;
        
        if (fail) {
            setFail(false);
            currentGuess = EMPTY_RESULT;
        }

        if (currentGuess === EMPTY_RESULT) {
            currentGuess = number.toString() + "_";
        } else if ( guess.endsWith("_")) {
            currentGuess = currentGuess.at(0) + number.toString();
        }

        setGuess(currentGuess);
    }

    function clear(){
        setGuess(EMPTY_RESULT);
        setSuccess(false);
        setFail(false);
    }

    useEffect(() => {
        // reset this
        clear();
    }, [challenge]);

    let guessClass = "guess ";
    if (success) {
        guessClass += "result_success " + randomSuccessAnimation();
    } else if (fail) {
        guessClass += "result_fail ";
    }

    return (
        <div className="number_entry_selector">
            <div className="result">
                <div className={guessClass}>
                    {guess}
                </div>
            </div>
            <div className="buttons">
                <FontAwesomeIcon icon="0" className="entry_button number" onClick={() => numberSelected(0)} />
                <FontAwesomeIcon icon="1" className="entry_button number" onClick={() => numberSelected(1)} />
                <FontAwesomeIcon icon="2" className="entry_button number" onClick={() => numberSelected(2)} />
                <FontAwesomeIcon icon="3" className="entry_button number" onClick={() => numberSelected(3)} />
                <FontAwesomeIcon icon="4" className="entry_button number" onClick={() => numberSelected(4)} />
                <FontAwesomeIcon icon="5" className="entry_button number" onClick={() => numberSelected(5)} />
                <FontAwesomeIcon icon="6" className="entry_button number" onClick={() => numberSelected(6)} />
                <FontAwesomeIcon icon="7" className="entry_button number" onClick={() => numberSelected(7)} />
                <FontAwesomeIcon icon="8" className="entry_button number" onClick={() => numberSelected(8)} />
                <FontAwesomeIcon icon="9" className="entry_button number" onClick={() => numberSelected(9)} />
                <span>&nbsp;</span>
                <FontAwesomeIcon icon="thumbs-up" className="entry_button accept" onClick={() => validateResult(parseInt(guess))} />
                <span>&nbsp;</span>
                <FontAwesomeIcon icon="eraser" className="entry_button clear" onClick={() => clear()} />
            </div>
        </div>
    );

}

