"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface Tasks {
  task: string;
  id: string;
  active: boolean;
  creationDate: string;
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as Tasks[],
  reducers: {
    taskAdded: (state, action) => {
      if (action.payload.task.trim() !== "") {
        state.push(action.payload);
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { taskAdded, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
