import ChallengeSpecification, { newChallenge } from "./challenge_specification";

export interface GameState {
    round: number;
    challengesSolvedInFirstAttempt: number;
    level: number;
    challenge: ChallengeSpecification;
    timeIsUp: boolean;
    spin: boolean;
}

export const initialGameState = (level: number): GameState => {
    let initialLevel = level;

    if (initialLevel > maxLevel) {
        initialLevel = maxLevel;
        console.log(`selected level too high, using max level ${maxLevel}`);
    }

    const state = {
        round: 1,
        challengesSolvedInFirstAttempt: 0,
        level: initialLevel,
        challenge: newChallenge(level),
        timeIsUp: false,
        spin: false,
    };
    console.log(state);
    return state;
}

const maxLevel = 3;
const evaluateLevelRounds = 8;
const minCorrectAnswersForLevelIncrement = 5;
const maxCorrectAnswersForLevelDecrement = 2;

export const gameStateSpinStart = (state: GameState): GameState => {
    const newState = {
        ...state,
        spin: true
    };
    console.log(newState);
    return newState;
}

export const gameStateNextChallenge = (state: GameState, correctOnFirstAttempt: boolean): GameState => {
    let level = state.level;
    let correctAttempts = correctOnFirstAttempt ? state.challengesSolvedInFirstAttempt + 1 : state.challengesSolvedInFirstAttempt;

    if (state.round % evaluateLevelRounds === 0) {
        if (level < maxLevel && correctAttempts >= minCorrectAnswersForLevelIncrement) {
            level = level + 1;
            console.log("level increased");
        } else if (level > 1 && correctAttempts <= maxCorrectAnswersForLevelDecrement) {
            level = level - 1;
            console.log("level decreased");
        } else {
            console.log("level did not change");
        }
        correctAttempts = 0;
    }

    const newState = {
        ...state,
        round: state.round + 1,
        challengesSolvedInFirstAttempt: correctAttempts,
        level: level,
        challenge: newChallenge(state.level),
    };
    console.log(newState);
    return newState;
}

export const gameStateSpinStop = (state: GameState): GameState => {
    const newState = {
        ...state,
        spin: false
    };
    return newState;
}


export const gameStateWithTimeout = (state: GameState): GameState => {
    return {
        ...state,
        timeIsUp: true
    }
}
