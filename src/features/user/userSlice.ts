import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TestState {
    finalScore: number
};

const initialState: TestState = {
    finalScore: 0
};

export const quizSlice = createSlice({
    name: 'Ouiz',
    initialState,
    reducers: {
        finalScore: (state, action: PayloadAction<number>) => {
            state.finalScore = action.payload
        }
    }
});

export const { finalScore } = quizSlice.actions;

export const selectFinalScore = (state: RootState) => state.quiz.finalScore

export default quizSlice.reducer