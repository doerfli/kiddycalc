import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ChallengeSpecification, { newChallenge } from '../../models/challenge_specification';

export interface GameState {
    round: number;
    challengesSolvedInFirstAttempt: number;
    level: number;
    challenge: ChallengeSpecification;
    timerExpired: boolean;
    spin: boolean;
}

const initialState: GameState = {
    round: 1,
    challengesSolvedInFirstAttempt: 0,
    level: 1,
    challenge: newChallenge(1),
    timerExpired: false,
    spin: false,
}

const MAX_LEVEL = 10;
const LEVEL_EVALUATION_EVERY_ROUNDS = 8;
const CORRECT_ANSWERS_UPPER_BOUND = 5;
const CORRECT_ANSWERS_LOWER_BOUND = 2;

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // SPIN_START,
        // NEXT_CHALLENGE,
        // SPIN_STOP,
        // TIME_IS_UP,
        spinStart: (state) => {
            state.spin = true;
        },
        spinStop: (state) => {
            state.spin = false;
        },
        timeIsUp: (state) => {
            state.timerExpired = true;
        },
        nextChallenge: (state, action: PayloadAction<boolean>) => {
            let correctAttempts = action.payload ? state.challengesSolvedInFirstAttempt + 1 : state.challengesSolvedInFirstAttempt;
            let level = state.level;

            if (state.round % LEVEL_EVALUATION_EVERY_ROUNDS === 0) {
                if (level < MAX_LEVEL && correctAttempts >= CORRECT_ANSWERS_UPPER_BOUND) {
                    level = level + 1;
                    console.log("level increased");
                } else if (level > 1 && correctAttempts <= CORRECT_ANSWERS_LOWER_BOUND) {
                    level = level - 1;
                    console.log("level decreased");
                } else {
                    console.log("level did not change");
                }
                correctAttempts = 0;
            }

            state.level = level;
            state.round = state.round + 1;
            state.challengesSolvedInFirstAttempt = correctAttempts;
            state.challenge = newChallenge(level);
        },
        setLevel: (state, action: PayloadAction<number>) => {
            state.level = action.payload;
            state.challenge = newChallenge(action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { 
    spinStart,
    spinStop,
    timeIsUp,
    nextChallenge,
    setLevel,
} = gameSlice.actions

export default gameSlice.reducer