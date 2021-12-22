import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// IMPORTANT!
// in components, import the following:
// import { useAppDispatch, useAppSelector } from '../hooks';

// Inside of component function, examples of use 
// const dispatch = useAppDispatch();
// export const selectCount = (state: RootState) => state.counter.value;  <-- in counterSlice.ts
// const count = useAppSelector(selectCount); <-- in Counter.tsx component