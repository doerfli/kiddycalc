import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { useSelector } from "react-redux";
import { Operation } from "../models/challenge_specification";
import { RootState } from "../redux/store";
import InputBlock from "./input_block";

const ResultInput = dynamic(
    () => import('./result_input/result_input'),
    { ssr: false }
)

interface ChallengeProps {
    challengeSolved: (correct: boolean) => void;
}

export default function Challenge(props: ChallengeProps) {
    const challenge = useSelector((state: RootState) => state.game.challenge);
    
    let operator;

    switch (challenge.operation) {
        case Operation.ADDITION:
            operator = (<FontAwesomeIcon icon="plus" className="icon_operator" />);
            break;

        case Operation.SUBTRACTION:
            operator = (<FontAwesomeIcon icon="minus" className="icon_operator" />);
            break;

        default:
            operator = (<FontAwesomeIcon icon="plus" className="icon_operator" />);
            break;
    }

    return (
        <div className="challenge">
            <div className="challenge_element">
                <InputBlock number={challenge.number1} icon={challenge.icon} type={challenge.inputType1} />
            </div>
            <div className="challenge_element">
                {operator}
            </div>
            <div className="challenge_element">
                <InputBlock number={challenge.number2} icon={challenge.icon} type={challenge.inputType2} />
            </div>
            <div className="challenge_element">
                <FontAwesomeIcon icon="equals" className="icon_operator" />
            </div>
            <div className="challenge_element">
                <ResultInput onSuccess={props.challengeSolved} />
            </div>
        </div>
    );

}
