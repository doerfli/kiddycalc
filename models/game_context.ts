import React, { Dispatch, SetStateAction } from "react";
import { getRandomIcon } from "../utils/icons";
import ChallengeSpecification from "./challenge_specification";

export interface GameContext {
    gameState: GameState;
    setGameState: Dispatch<SetStateAction<GameState>>;
}

export interface GameState {
    round: number;
    challenge: ChallengeSpecification;
}

export const newChallenge = (): ChallengeSpecification => {
    const n1 = Math.ceil(Math.random() * 5);
    const n2 = Math.ceil(Math.random() * 5);
    return {
        number1: n1,
        number2: n2,
        result: n1 + n2,
        icon: getRandomIcon()
    };
}

export const newGameState = (i = 0): GameState => {
    return {
        round: i + 1,
        challenge: newChallenge()
    };
}

export const GameContext = React.createContext<GameContext|null>(null);
