import React from "react";
import { NumberElementType } from "../components/number/number_element";
import { getRandomIcon } from "../utils/icons";
import ChallengeSpecification from "./challenge_specification";

export interface GameContext {
    gameState: GameState;
    dispatch: React.Dispatch<GameStateAction>;
}

export const GameContext = React.createContext<GameContext|null>(null);

export enum GameActionKind  {
    NEXT
}

export interface GameStateAction {
    type: GameActionKind;
}

export interface GameState {
    round: number;
    challenge: ChallengeSpecification;
}

const getRandomNumberElementType = (): NumberElementType => { 
    return Math.random() < 0.5 ? NumberElementType.ICONS : NumberElementType.NUMERIC;
}

export const newChallenge = (): ChallengeSpecification => {
    const n1 = Math.ceil(Math.random() * 5);
    const n2 = Math.ceil(Math.random() * 5);
    return {
        number1: n1,
        number2: n2,
        result: n1 + n2,
        icon: getRandomIcon(),
        inputType1: getRandomNumberElementType(),
        inputType2: getRandomNumberElementType(),
        resultType1: getRandomNumberElementType(),
        resultType2: getRandomNumberElementType(),
        resultType3: getRandomNumberElementType()
    };
}

export const newGameState = (i = 0): GameState => {
    return {
        round: i + 1,
        challenge: newChallenge()
    };
}

export const gameStateReducer = (state: GameState, action: GameStateAction): GameState => {
    switch (action.type) {
        case GameActionKind.NEXT:
            return newGameState(state.round);
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
}