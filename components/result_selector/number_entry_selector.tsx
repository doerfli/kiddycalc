import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState }  from "react";
import ChallengeSpecification from "../../models/challenge_specification";


interface NumberEntrySelectorProps {
    challenge: ChallengeSpecification;
    onSuccess: (correct: boolean) => void;
}

export default function NumberEntrySelector(props: NumberEntrySelectorProps) {
    const challenge = props.challenge;
    const [ tries, setTries ] = useState(0);
    const [ guess, setGuess ] = useState("");

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
            props.onSuccess(newTries == 1);
        } else {
            // setColorToIconBlock("result_fail");
        }
    }

    function numberSelected(number: number) {
        setGuess(guess + number);
    }

    useEffect(() => {
        // reset this
        setGuess("");
    }, [challenge]);

    return (
        <div className="number_entry_selector">
            <div className="guess">
                {guess}
            </div>
            <div className="buttons">
                <FontAwesomeIcon icon="0" className="number_entry_button" onClick={() => numberSelected(0)} />
                <FontAwesomeIcon icon="1" className="number_entry_button" onClick={() => numberSelected(1)} />
                <FontAwesomeIcon icon="2" className="number_entry_button" onClick={() => numberSelected(2)} />
                <FontAwesomeIcon icon="3" className="number_entry_button" onClick={() => numberSelected(3)} />
                <FontAwesomeIcon icon="4" className="number_entry_button" onClick={() => numberSelected(4)} />
                <FontAwesomeIcon icon="5" className="number_entry_button" onClick={() => numberSelected(5)} />
                <FontAwesomeIcon icon="6" className="number_entry_button" onClick={() => numberSelected(6)} />
                <FontAwesomeIcon icon="7" className="number_entry_button" onClick={() => numberSelected(7)} />
                <FontAwesomeIcon icon="8" className="number_entry_button" onClick={() => numberSelected(8)} />
                <FontAwesomeIcon icon="9" className="number_entry_button" onClick={() => numberSelected(9)} />
                <FontAwesomeIcon icon="thumbs-up" className="number_entry_button accept" onClick={() => validateResult(parseInt(guess))} />
                <FontAwesomeIcon icon="eraser" className="number_entry_button clear" onClick={() => setGuess("")} />
            </div>
        </div>
    );

}
