import React, { useContext }  from "react";
import { ResultSelectorType } from "../../models/challenge_specification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultipleChoiceSelector from "./multiple_choice_icon_input";
import NumberEntrySelector from "./digit_input";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface ResultInputProps {
    onSuccess: (correct: boolean) => void;
}

const SUCCESS_ANIMATIONS = [
    "success_animation_1",
    "success_animation_2",
    "success_animation_3",
    "success_animation_4",
    "success_animation_5",
];

export const randomSuccessAnimation = () => {
    return SUCCESS_ANIMATIONS[Math.floor(Math.random() * SUCCESS_ANIMATIONS.length)];
}

export default function ResultInput(props: ResultInputProps) {
    const challenge = useSelector((state: RootState) => state.game.challenge);

    if (challenge.resultSelector == ResultSelectorType.ICONS) {
        return (
            <MultipleChoiceSelector challenge={challenge} onSuccess={props.onSuccess} />
        )
    } else if (challenge.resultSelector == ResultSelectorType.NUMBER_ENTRY) {
        return (
            <NumberEntrySelector challenge={challenge} onSuccess={props.onSuccess} />
        )
    } else {
        return (
            <FontAwesomeIcon icon="fire" className="text-6xl" />
        )
    }

}
