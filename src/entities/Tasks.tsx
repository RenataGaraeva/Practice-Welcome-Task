'use client';

import Task from "./task/ui/Task";
import { useSelector } from "react-redux";
import { RootState } from "@app/store/store";

export default function Tasks() {

  const tasks = useSelector((state: RootState) => state.tasks);
  console.log('Tasks in component:', tasks);

  return (
    <>
      {tasks.map((task) => (
        <div
          className="d-flex align-items-center justify-content-center mb-3"
          key={task.id}
        >
          <Task task={task} />
        </div>
      ))}
    </>
  );
}
