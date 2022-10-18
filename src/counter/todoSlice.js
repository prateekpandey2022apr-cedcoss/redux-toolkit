import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ ...action.payload });
    },

    updateTodo: (state, action) => {
      debugger;
      const todo = state.list.find((item) => item.id === action.payload.id);
      todo.text = action.payload.text;
    },

    deleteTodo: (state, action) => {
      debugger;
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
