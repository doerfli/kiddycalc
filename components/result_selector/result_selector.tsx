import React, { useContext }  from "react";
import { GameContext } from "../../models/game_context";
import { ResultSelectorType } from "../../models/challenge_specification";
import MultipleChoiceSelector from "./multiple_choice_selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ResultSelectorProps {
    onSuccess: (correct: boolean) => void;
}

export default function ResultSelector(props: ResultSelectorProps) {
    const { gameState } = useContext(GameContext) as GameContext;

    if (gameState.challenge.resultSelector == ResultSelectorType.ICONS) {
        return (
            <MultipleChoiceSelector challenge={gameState.challenge} onSuccess={props.onSuccess} />
        )
    } else {
        return (
            <FontAwesomeIcon icon="fire" className="text-6xl" />
        )
    }

}
