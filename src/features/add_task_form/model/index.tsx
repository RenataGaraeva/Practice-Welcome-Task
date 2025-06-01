import {taskAdded, Tasks} from "@features/add_task_form/TasksSlice";
import {nanoid} from "@reduxjs/toolkit";
import {AppDispatch} from "@app/store";

interface AddTaskFormElements extends HTMLFormControlsCollection {
    taskTitle: HTMLInputElement;
}

interface AddTaskForm extends HTMLFormElement {
    readonly elements: AddTaskFormElements;
}

export const handleSubmit = (e: React.FormEvent<AddTaskForm>, dispatch: AppDispatch) => {

    e.preventDefault();
    try {
        const {elements} = e.currentTarget;
        const task = elements.taskTitle.value;

        const currentDate = new Date()
        const date = currentDate.toLocaleDateString('en-US')

        const Task: Tasks = {
            task,
            id: nanoid(),
            active: true,
            creationDate: date
        };

        dispatch(taskAdded(Task));

        e.currentTarget.reset();
    } catch (error) {
        console.error("Error adding task:", error);
    }
};
