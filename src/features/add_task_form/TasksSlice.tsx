"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    taskDone: (
      state,
      action: PayloadAction<{ id: string; active: boolean }>,
    ) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) {
        task.active = action.payload.active; // Явно задаём новый статус
      }
    },
    changeTask: (
      state,
      action: PayloadAction<{ id: string; task: string }>,
    ) => {
      const taskToUpdate = state.find(
        (element) => element.id === action.payload.id,
      );
      if (taskToUpdate) {
        taskToUpdate.task = action.payload.task;
      }
    },
  },
});

export const { taskAdded, deleteTask, taskDone, changeTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
