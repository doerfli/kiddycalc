import ChallengeSpecification, { newChallenge } from "./challenge_specification";

export interface GameState {
    round: number;
    challengesSolvedInFirstAttempt: number;
    level: number;
    challenge: ChallengeSpecification;
    timeIsUp: boolean;
}

export const initialGameState = (): GameState => {
    return {
        round: 1,
        challengesSolvedInFirstAttempt: 0,
        level: 1,
        challenge: newChallenge(1),
        timeIsUp: false
    };
}

const maxLevel = 3;
const evaluateLevelRounds = 8;
const minCorrectAnswersForLevelIncrement = 5;
const maxCorrectAnswersForLevelDecrement = 2;

export const newGameState = (state: GameState, correctAtFirstAttempt: boolean): GameState => {
    let correctAttempts = correctAtFirstAttempt ? state.challengesSolvedInFirstAttempt + 1 : state.challengesSolvedInFirstAttempt
    let level = state.level;

    if (state.round % evaluateLevelRounds === 0) {
        if (level < maxLevel && correctAttempts >= minCorrectAnswersForLevelIncrement) {
            level = level + 1;
        } else if (level > 1 && correctAttempts <= maxCorrectAnswersForLevelDecrement) {
            level = level - 1;
        }
        correctAttempts = 0;
    }

    const newState = {
        round: state.round + 1,
        challengesSolvedInFirstAttempt: correctAttempts,
        level: level,
        challenge: newChallenge(state.level),
        timeIsUp: false
    };
    console.log(newState);
    return newState;
}

export const gameStateWithTimeout = (state: GameState): GameState => {
    return {
        ...state,
        timeIsUp: true
    }
}
