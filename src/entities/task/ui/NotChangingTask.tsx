'use client';

import {
    type Tasks,
} from "@features/add_task_form/TasksSlice";

interface TaskProps {
    task: Tasks;
    setText: (text: string) => void;
    setIsEditing: (isEditing: boolean) => void;
}

export default function NotChangingTask({
                                            task,
                                            setText,
                                            setIsEditing,
                                        }: TaskProps) {
  return (
    <>
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={!task.active}
      />
      <div className="me-2 fs-6 fs-md-5 fs-lg-4">{task.task}</div>
      <input
        className="btn btn-outline-primary me-2"
        type="button"
        value="Change"
      />
    </>
  );
}
