import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
/** import reducers here */
import quizReducer from '../features/user/userSlice';

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

/** configuration for local storage */
export const config = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  quiz: quizReducer
  /** add reducers to root reducer here
   * format:
   * 
   * reducerName: slice,
   */
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
