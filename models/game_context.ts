import React from "react";
import { GameState, newGameState } from "./game_state";

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

export const gameStateReducer = (state: GameState, action: GameStateAction): GameState => {
    switch (action.type) {
        case GameActionKind.NEXT:
            return newGameState(state.round);
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
}