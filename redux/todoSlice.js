import { createSlice } from '@reduxjs/toolkit';
const todoSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newNote = {
        id: Date.now(),
        title: action.payload.title,
        quotes: action.payload.quotes,
      };
      state.push(newNote);
    },
  },
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
