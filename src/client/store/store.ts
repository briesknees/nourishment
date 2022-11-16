import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '.././__mocks__/counter/counterSlice';
import tasksReducer from '../__mocks__/tdd/tasksSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
