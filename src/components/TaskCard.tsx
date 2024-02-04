import { useState } from "react";
import { Task } from "../utils/data-tasks";

const lowPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 9l7 7 7-7"
    />
  </svg>
);
const mediumPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-yellow-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10h14"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 14h14"
    />
  </svg>
);
const highPriorityIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const TaskCard = ({
  task,
  updateTaskPoints,
  updateTaskTitle,
}: {
  task: Task;
  updateTaskPoints: (task: Task, points: number) => void;
  updateTaskTitle: (task: Task, title: string) => void;
}) => {
  const [isEditingTitle, setEditingTitle] = useState(false);
  const points = task.points || 0;
  const updatePoints = (direction: "up" | "down") => {
    const fib = [0, 1, 2, 3, 5, 8, 13];
    const index = fib.indexOf(points);
    const nextIndex = direction === "up" ? index + 1 : index - 1;
    const newPoints = fib[nextIndex] || 0;
    if (newPoints) {
      updateTaskPoints(task, newPoints);
    }
  };
  return (
    <div className="px-2 m-2 border rounded-lg w-52 bg-gray-50">
      <div className="py-2 text-base font-base">
        {isEditingTitle ? (
          <input
            autoFocus
            className="w-full"
            onBlur={() => setEditingTitle(false)}
            value={task.title}
            onChange={(e) => updateTaskTitle(task, e.target.value)}
          />
        ) : (
          <div onClick={() => setEditingTitle(true)}>{task.title}</div>
        )}
      </div>

      <div className="flex justify-between gap-4 py-2 text-sm text-gray-500">
        <div className="flex gap-2">
          <div>{task.id}</div>
          {task.priority === "high" && highPriorityIcon}
          {task.priority === "medium" && mediumPriorityIcon}
          {task.priority === "low" && lowPriorityIcon}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => updatePoints("down")}>-</button>
          <div className="font-bold">{points}</div>
          <button onClick={() => updatePoints("up")}>+</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
