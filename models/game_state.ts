import ChallengeSpecification, { newChallenge } from "./challenge_specification";

export interface GameState {
    round: number;
    challenge: ChallengeSpecification;
    timeIsUp: boolean;
}

export const newGameState = (i = 0): GameState => {
    return {
        round: i + 1,
        challenge: newChallenge(),
        timeIsUp: false
    };
}

export const gameStateWithTimeout = (state: GameState): GameState => {
    return {
        ...state,
        timeIsUp: true
    }
}
