"use client";
import ChangingTask from "./ChangingTask";
import NotChangingTask from "./NotChangingTask";
import { type Tasks } from "@features/add_task_form/TasksSlice";
import { useState } from "react";
import {deleteTextTask, makeIdDoneOrNotDone} from "@entities/task/model";
import {useAppDispatch} from "@app/store/hooks";

interface TaskProps {
  task: Tasks;
}

export default function Task({ task }: TaskProps) {
    const [text, setText] = useState(task.task);
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useAppDispatch();

  return (
      <div className="d-flex flex-wrap justify-content-center align-items-center">
          <input
              className="form-check-input me-2"
              type="checkbox"
              checked={!task.active}
              onChange={() => makeIdDoneOrNotDone(task, dispatch)}
          />
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
              value="Delete"
              onClick={() => deleteTextTask(task, dispatch)}
          />
          <span>Created {task.creationDate}</span>
      </div>
  );
}
