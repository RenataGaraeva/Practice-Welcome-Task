import {deleteTask, taskDone} from "@features/add_task_form/TasksSlice";

export const deleteTextTask = (task,dispatch) => {
    dispatch(deleteTask(task.id));
};

export const makeIdDoneOrNotDone = (task, dispatch) => {
    dispatch(
        taskDone({
            id: task.id,
            active: !task.active,
        }),
    );
};

