'use client';

import {
    type Tasks
} from "@features/add_task_form/TasksSlice";

interface TaskProps {
    task: Tasks;
    setText: (text: string) => void;
    setIsEditing: (isEditing: boolean) => void;
    text: string;
}

export default function ChangingTask({
                                         task,
                                         text,
                                     }: TaskProps) {
  return (
    <>
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={!task.active}
      />
      <input className="form-control me-2 w-50" type="text" value={text}/>
      <input
        className="btn btn-outline-primary me-2"
        type="button"
        value="Save"
      />
    </>
  );
}
