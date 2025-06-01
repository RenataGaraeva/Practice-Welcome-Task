import AddTaskForm from "@features/add_task_form/ui";
import Tasks from "@entities/tasks_list/ui";

export default function Home() {
  return (
    <div>
      <main>
          <AddTaskForm />
          <Tasks />
      </main>
    </div>
  );
}
