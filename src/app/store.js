import { configureStore } from '@reduxjs/toolkit';
import crashReducer from '../features/carCrashSlice'

export const store = configureStore({
  reducer: {
    crashes: crashReducer,
  },
});
