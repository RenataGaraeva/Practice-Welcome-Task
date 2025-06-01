import {deleteTask, taskDone, Tasks} from "@features/add_task_form/TasksSlice";
import {AppDispatch} from "@app/store";

export interface Task {
    id: string;
    task: string;
    active: boolean;
    creationDate: string;
}

export const deleteTextTask = (task: Task,dispatch: AppDispatch) => {
    dispatch(deleteTask(task.id));
};

export const makeIdDoneOrNotDone = (task: Tasks, dispatch: AppDispatch) => {
    dispatch(
        taskDone({
            id: task.id,
            active: !task.active,
        }),
    );
};

