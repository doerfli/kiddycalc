import React from "react";
import { GameState, gameStateWithTimeout, newGameState } from "./game_state";

export interface GameContext {
    gameState: GameState;
    dispatch: React.Dispatch<GameStateAction>;
}

export const GameContext = React.createContext<GameContext|null>(null);

export enum GameActionKind  {
    NEXT,
    TIME_IS_UP
}

export interface GameStateAction {
    type: GameActionKind;
}

export const gameStateReducer = (state: GameState, action: GameStateAction): GameState => {
    switch (action.type) {
        case GameActionKind.NEXT:
            return newGameState(state.round);
        case GameActionKind.TIME_IS_UP:
            return gameStateWithTimeout(state);
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
}