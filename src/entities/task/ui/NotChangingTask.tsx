'use client';

import {
  taskDone,
  type Tasks,
} from "@features/add_task_form/TasksSlice";
import { useAppDispatch } from "@app/store/hooks";

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
  const dispatch = useAppDispatch();

  const makeIdDoneOrNotDone = () => {
    dispatch(
      taskDone({
        id: task.id,
        active: !task.active,
      }),
    );
  };
  const handleStartEditing = () => {
    setIsEditing(true);
    setText(task.task);
  };

  return (
    <>
      <input
        className="form-check-input me-2"
        type="checkbox"
        onChange={makeIdDoneOrNotDone}
        checked={!task.active}
      />
      <div className="me-2 fs-6 fs-md-5 fs-lg-4">{task.task}</div>
      <input
        className="btn btn-outline-primary me-2"
        type="button"
        onClick={handleStartEditing}
        value="Change"
      />
    </>
  );
}
