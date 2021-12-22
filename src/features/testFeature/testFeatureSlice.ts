import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TestState {
    names: string[];
}

const initialState: TestState = {
    names: []
}

export const testFeatureSlice = createSlice({
    name: 'testFeature',
    initialState,
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.names.push(action.payload)
        },
        removeName: (state, action: PayloadAction<string>) => {
            state.names = state.names.filter(name => name !== action.payload)
        }
    }
})

export const { addName, removeName } = testFeatureSlice.actions;

export const selectNames = (state: RootState) => state.test.names;

export default testFeatureSlice.reducer;