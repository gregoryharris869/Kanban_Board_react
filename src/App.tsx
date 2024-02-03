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
    <section className="flex divide-x">
      {columns.map((column) => (
        <div>
          <h2 className="p-2 text-3xl font-bold text-gray-500 capitalize">
            {column.title}
          </h2>
          {column.tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default App;
