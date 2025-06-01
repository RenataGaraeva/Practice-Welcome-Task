'use client'

import {configureStore} from "@reduxjs/toolkit";

import tasksReducer from "@features/add_task_form/TasksSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;