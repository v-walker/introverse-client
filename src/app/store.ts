import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testFeatureReducer from '../features/testFeature/testFeatureSlice';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// configurtion for local storage
export const config = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  counter: counterReducer,
  test: testFeatureReducer
})

const persisted = persistReducer(config, rootReducer)

export const store = configureStore({
  reducer: persisted
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
