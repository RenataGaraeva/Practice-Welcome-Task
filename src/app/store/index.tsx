'use client'

import {configureStore, Middleware} from "@reduxjs/toolkit";

import tasksReducer, {Tasks} from "@features/add_task_form/TasksSlice";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {

  const result = next(action);

  if (typeof window !== 'undefined' && action.type.startsWith('tasks/')) {
    try {
      localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
    } catch (error) {
      console.error('Ошибка сохранения в localStorage:', error);
    }
  }
  return result;
};

const loadFromLocalStorage = (): Tasks[] => {
  if (typeof window === 'undefined') return [];

  try {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Ошибка загрузки из localStorage:', error);
    return [];
  }
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState: {
    tasks: loadFromLocalStorage()
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware)
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;