import { Task } from "../utils/data-tasks";

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className="px-2 m-2 border rounded-lg bg-gray-50">
      <div className="py-2 text-base font-semibold font">{task.title}</div>
      <div className="flex justify-between gap-4 py-2 text-gray-700">
        <div>{task.id}</div>
        <div>EL</div>
        <div>{task.points}</div>
      </div>
    </div>
  );
};

export default TaskCard;
