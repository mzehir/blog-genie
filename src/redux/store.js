import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlices';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
