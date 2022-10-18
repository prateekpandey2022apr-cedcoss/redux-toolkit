import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoReducer from "./counter/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
