import React from "react";
import { GameState, gameStateNextChallenge, gameStateSpinStart, gameStateSpinStop, gameStateWithTimeout } from "./game_state";

export interface GameContext {
    gameState: GameState;
    dispatch: React.Dispatch<GameStateAction>;
}

export const GameContext = React.createContext<GameContext|null>(null);

export enum GameActionKind  {
    SPIN_START,
    NEXT_CHALLENGE,
    SPIN_STOP,
    TIME_IS_UP,
}

export interface GameStateAction {
    type: GameActionKind;
    correctOnFirstAttempt?: boolean;
}

export const gameStateReducer = (state: GameState, action: GameStateAction): GameState => {
    switch (action.type) {
        case GameActionKind.SPIN_START:
            return gameStateSpinStart(state);
        case GameActionKind.NEXT_CHALLENGE:
            return gameStateNextChallenge(state, action.correctOnFirstAttempt || false);
        case GameActionKind.SPIN_STOP:
            return gameStateSpinStop(state);
        case GameActionKind.TIME_IS_UP:
            return gameStateWithTimeout(state);
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
}