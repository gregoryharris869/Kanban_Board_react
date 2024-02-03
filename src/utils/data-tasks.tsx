export type Status = "todo" | "in-progress" | "done";

export type Priority = "low" | "medium" | "high";

export type Task = {
  title: string;
  id: string;
  status: Status;
  priority: Priority;
  points?: number;
};

export const statuses: Status[] = ["todo", "in-progress", "done"];

export const priorities: Priority[] = ["low", "medium", "high"];

export const tasks: Task[] = [
  {
    title: "Do Market Research",
    id: "BUS-1",
    status: "done",
    priority: "low",
    points: 5,
  },

  {
    title: "Competitor analysis",
    status: "done",
    id: "BUS-2",
    priority: "high",
    points: 0,
  },

  {
    title: "Develop Business Strategy",
    id: "BUS-3",
    status: "in-progress",
    priority: "high",
    points: 8,
  },

  {
    title: "Develop Marketing Strategy",
    id: "BUS-4",
    status: "todo",
    priority: "high",
    points: 5,
  },
  {
    title: "Negotiate partnership",
    id: "BUS-5",
    status: "todo",
    priority: "medium",
    points: 3,
  },
  {
    title: "Develop marketing plan",
    id: "BUS-6",
    status: "in-progress",
    priority: "medium",
    points: 5,
  },
  {
    title: "Implement marketing plan",
    id: "BUS-7",
    status: "in-progress",
    priority: "high",
    points: 8,
  },
  {
    title: "Evaluate business performance",
    id: "BUS-8",
    status: "done",
    priority: "high",
    points: 6,
  },
];
