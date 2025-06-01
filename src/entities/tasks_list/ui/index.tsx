"use client";

import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import Task from "@entities/task/ui";

export default function Tasks() {

  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <>
      {tasks.map((task) => (
        <div
          className="d-flex align-items-center justify-content-center mb-3"
          key={task.id}
        >
          <Task task={task}/>
        </div>
      ))}
    </>
  );
}
