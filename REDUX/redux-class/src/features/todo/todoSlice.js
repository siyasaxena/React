// here we will write reducers related to todo list

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  //store initial sate
  todos: [
    {
      id: "abc",
      task: "demo-task",
      isDone: false,
    },
  ],
};

// now create bundle of reducers and actions
export const todosSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    // state, action      // they are three reducers which are changing state and in return giving new updated state
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); // direct mutation of the arr is the benefit of redux, earlier it was this [...todos, newTodo]
    },

    deleteTodo: (state, action) => {
      //action.payload - it gives id
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },

    markAsDone: (state, action) => {
      //action.payload - it gives id
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todosSlice.actions;
export default todosSlice.reducer;
