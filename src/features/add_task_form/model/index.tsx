import {taskAdded, Tasks} from "@features/add_task_form/TasksSlice";
import {nanoid} from "@reduxjs/toolkit";

export const handleSubmit = (e: React.FormEvent<AddTaskFormElements>, dispatch) => {


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

    e.currentTarget.reset();
};
