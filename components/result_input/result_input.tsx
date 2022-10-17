import React, { useContext }  from "react";
import { GameContext } from "../../models/game_context";
import { ResultSelectorType } from "../../models/challenge_specification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultipleChoiceSelector from "./multiple_choice_icon_input";
import NumberEntrySelector from "./digit_input";

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
    const { gameState } = useContext(GameContext) as GameContext;

    if (gameState.challenge.resultSelector == ResultSelectorType.ICONS) {
        return (
            <MultipleChoiceSelector challenge={gameState.challenge} onSuccess={props.onSuccess} />
        )
    } else if (gameState.challenge.resultSelector == ResultSelectorType.NUMBER_ENTRY) {
        return (
            <NumberEntrySelector challenge={gameState.challenge} onSuccess={props.onSuccess} />
        )
    } else {
        return (
            <FontAwesomeIcon icon="fire" className="text-6xl" />
        )
    }

}
