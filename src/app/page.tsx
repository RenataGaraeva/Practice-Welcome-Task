import AddTaskForm from "@features/add_task_form/ui";
import Tasks from "@entities/tasks_list/ui";
import Theme_light_dark from "@entities/theme/ui";
import "./scss.scss";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <div>
      <main>
        <Theme_light_dark />
        <AddTaskForm />
        <Tasks />
      </main>
    </div>
  );
}
