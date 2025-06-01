'use client'

import { useSelector } from "react-redux";
import { RootState } from "@app/store/store";

import {
    taskAdded,
    type Tasks,
} from "../TasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "@app/store/hooks";

interface AddTaskFormFields extends HTMLFormControlsCollection {
    taskTitle: HTMLInputElement;
}
interface AddTaskFormElements extends HTMLFormElement {
    readonly elements: AddTaskFormFields;
}
export default function AddTaskForm() {

    const tasks = useSelector((state: RootState) => state.tasks);

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<AddTaskFormElements>) => {
        e.preventDefault();

        const { elements } = e.currentTarget;
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

        console.log(tasks)
        e.currentTarget.reset();
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="mb-3 mt-3 d-flex justify-content-center"
            >
                <input
                    type="text"
                    id="taskTitle"
                    className="form-control me-2 w-50"
                    placeholder="Enter task"
                />
                <input className="btn btn-outline-primary" type="submit" value="Add" />
            </form>
        </>
    );
}
