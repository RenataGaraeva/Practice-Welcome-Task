import AddTaskForm from "@/features/add_task_form/ui";
import Tasks from "@entities/Tasks";
import Theme_light_dark from "src/entities/theme";
import "./scss.scss";
import 'bootstrap/dist/css/bootstrap.css';

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
