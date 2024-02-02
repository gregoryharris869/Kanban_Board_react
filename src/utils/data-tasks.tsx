export type Status = "todo" | "in-progress" | "done";

export type Task = {
  title: string;
  id: string;
  status: Status;
  points?: number;
};

export const statuses: Status[] = ["todo", "in-progress", "done"];

export const tasks: Task[] = [
  {
    title: "Do Market Research",
    id: "BUS-1",
    status: "done",
    points: 5,
  },

  {
    title: "Competitor analysis",
    status: "done",
    id: "BUS-2",
    points: 0,
  },

  {
    title: "Develop Business Strategy",
    id: "BUS-3",
    status: "in-progress",
    points: 8,
  },

  {
    title: "Develop Marketing Strategy",
    id: "BUS-4",
    status: "todo",
    points: 5,
  },
  {
    title: "Negotiate partnership",
    id: "BUS-5",
    status: "todo",
    points: 3,
  },
  {
    title: "Develop marketing plan",
    id: "BUS-6",
    status: "in-progress",
    points: 5,
  },
  {
    title: "Implement marketing plan",
    id: "BUS-7",
    status: "in-progress",
    points: 8,
  },
  {
    title: "Evaluate business performance",
    id: "BUS-8",
    status: "done",
    points: 6,
  },
];
