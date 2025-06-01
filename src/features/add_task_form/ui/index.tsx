export default function AddTaskForm() {
  return (
    <>
      <form className="mb-3 mt-3 d-flex justify-content-center">
        <input
          type="text"
          id="taskTitle"
          className="form-control me-2 w-50"
          placeholder="Enter task"
        />
        <input className="btn btn-outline-primary" type="submit" value="Add" />
      </form>
    </>
  );
}
