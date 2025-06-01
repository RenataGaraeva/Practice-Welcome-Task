'use client';

import {
  changeTask,
  taskDone,
  type Tasks,
} from "@features/add_task_form/TasksSlice";
import { useAppDispatch } from "@app/store/hooks";

interface TaskProps {
  task: Tasks;
  setText: (text: string) => void;
  setIsEditing: (isEditing: boolean) => void;
  text: string;
}

export default function ChangingTask({
  task,
  setText,
  setIsEditing,
  text,
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

  const handleSaveChanges = () => {
    dispatch(
      changeTask({
        id: task.id,
        task: text,
      }),
    );
    setIsEditing(false);
  };

  return (
    <>
      <input
        className="form-check-input me-2"
        type="checkbox"
        onChange={makeIdDoneOrNotDone}
        checked={!task.active}
      />
      <input
        className="form-control me-2 w-50"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="btn btn-outline-primary me-2"
        type="button"
        onClick={handleSaveChanges}
        value="Save"
      />
    </>
  );
}
