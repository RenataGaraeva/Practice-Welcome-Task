'use client';

import ChangingTask from "./ChangingTask";
import NotChangingTask from "./NotChangingTask";
import { useState } from "react";
import { type Tasks } from "@features/add_task_form/TasksSlice";
import {deleteTask} from "@features/add_task_form/TasksSlice";
import { useAppDispatch } from "@app/store/hooks";

interface TaskProps {
  task: Tasks;
}

export default function Task({ task }: TaskProps) {
  const [text, setText] = useState(task.task);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();
  const deleteTextTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {isEditing ? (
            <ChangingTask
                task={task}
                setIsEditing={setIsEditing}
                text={text}
                setText={setText}
            />
        ) : (
            <NotChangingTask
                task={task}
                setIsEditing={setIsEditing}
                setText={setText}
            />
        )}
        <input
            className="btn btn-outline-primary me-2"
            type="button"
            onClick={deleteTextTask}
            value="Delete"
        />
          <span>
          Created {task.creationDate}
          </span>
      </div>
  );
}