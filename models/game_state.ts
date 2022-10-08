import ChallengeSpecification, { newChallenge } from "./challenge_specification";

export interface GameState {
    round: number;
    challenge: ChallengeSpecification;
}

export const newGameState = (i = 0): GameState => {
    return {
        round: i + 1,
        challenge: newChallenge()
    };
}
