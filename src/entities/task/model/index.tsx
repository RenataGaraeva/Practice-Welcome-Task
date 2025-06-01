import {deleteTask} from "@features/add_task_form/TasksSlice";

export const deleteTextTask = (task,dispatch) => {
    dispatch(deleteTask(task.id));
};