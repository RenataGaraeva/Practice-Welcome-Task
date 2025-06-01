"use client";

import { handleSubmit } from "@features/add_task_form/model";

import { useAppDispatch } from "@app/store/hooks";

interface AddTaskFormElements extends HTMLFormControlsCollection {
  taskTitle: HTMLInputElement;
}

interface AddTaskForm extends HTMLFormElement {
  readonly elements: AddTaskFormElements;
}

export default function AddTaskForm() {
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<AddTaskForm>) => {
    handleSubmit(e, dispatch);
  };
  return (
    <>
      <form
        onSubmit={onSubmit}
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
