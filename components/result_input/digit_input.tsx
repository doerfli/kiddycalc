import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState }  from "react";
import ChallengeSpecification from "../../models/challenge_specification";
import { randomSuccessAnimation } from "./result_input";


interface DigitInputProps {
    challenge: ChallengeSpecification;
    onSuccess: (correct: boolean) => void;
}

const EMPTY_RESULT = "__";

const getNumberElement = (number: string) => {
    if (number === EMPTY_RESULT) {
        return (
            <span>
                <FontAwesomeIcon icon="4" className="number invisible" />
                <FontAwesomeIcon icon="4" className="number invisible" />
            </span>
        )
    } else if ( number.endsWith("_")) {
        return (
            <span>
                <FontAwesomeIcon icon={number.at(0) as IconProp} className="number" />
                <FontAwesomeIcon icon="4" className="number invisible" />
            </span>
        )
    } else {
        return (
            <span>
                <FontAwesomeIcon icon={number.at(0) as IconProp} className="number" />
                <FontAwesomeIcon icon={number.at(1) as IconProp} className="number" />
            </span>
        )
    }
}

export default function DigitInput(props: DigitInputProps) {
    const challenge = props.challenge;
    const [ tries, setTries ] = useState(0);
    const [ guess, setGuess ] = useState(EMPTY_RESULT);
    const [ success, setSuccess ] = useState(false);
    const [ lastGuessInvalid, setLastGuessInvalid ] = useState(false);
    const [ entryFailed, setEntryFailed ] = useState(false);

    function validateResult(result: number): void {
        if (success || entryFailed) {
            return;
        }

        if (lastGuessInvalid) {
            setLastGuessInvalid(false);
            setGuess(EMPTY_RESULT);
            return;
        }

        const correct = result === challenge.result;
        console.log(correct);
        const newTries = tries + 1;
        setTries(newTries);
        
        if (correct) {
            setSuccess(true);
            props.onSuccess(newTries == 1);
        } else {
            setLastGuessInvalid(true);

            if (newTries >= 3) {
                props.onSuccess(false);
                setEntryFailed(true);
                let correctGuess = props.challenge.result.toString();
                if (correctGuess.length == 1) {
                    correctGuess = correctGuess + "_";
                }
                setGuess(correctGuess);
            }
        }
    }

    function numberSelected(number: number) {
        if (success || entryFailed) {
            return;
        }

        let currentGuess = guess;
        
        if (lastGuessInvalid) {
            setLastGuessInvalid(false);
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
        if (success || entryFailed) {
            return;
        }
        setGuess(EMPTY_RESULT);
        setLastGuessInvalid(false);
    }

    useEffect(() => {
        // reset this component
        setGuess(EMPTY_RESULT);
        setSuccess(false);
        setLastGuessInvalid(false);
        setTries(0);
        setEntryFailed(false);
    }, [challenge]);

    let guessClass = "guess ";
    if (success) {
        guessClass += "result_success " + randomSuccessAnimation();
    } else if (lastGuessInvalid) {
        guessClass += "result_fail ";
    }

    return (
        <div className="number_entry_selector">
            <div className="result">
                <div className={guessClass}>
                    {getNumberElement(guess)}
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

