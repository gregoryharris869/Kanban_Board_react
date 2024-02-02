import TaskCard from "./components/TaskCard";

import { tasks, statuses } from "./utils/data-tasks";

function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);
    return {
      title: status,
      tasks: tasksInColumn,
    };
  });

  return (
    <section className="flex divide-y">
      {columns.map((column) => (
        <div>
          <h1>{column.title}</h1>
          {column.tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default App;
