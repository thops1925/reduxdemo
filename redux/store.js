import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './todoSlice';

export default configureStore({
  reducer: {
    notes: noteReducer,
  },
});
