"use client";

import { changeTask, type Tasks } from "@features/add_task_form/TasksSlice";
import { useAppDispatch } from "@app/store/hooks";

interface TaskProps {
  text: string;
  setIsEditing: (isEditing: boolean) => void;
  task: Tasks;
  setText: (text: string) => void;
}

export default function ChangingTask({
  text,
  setIsEditing,
  task,
  setText,
}: TaskProps) {
  const dispatch = useAppDispatch();

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
