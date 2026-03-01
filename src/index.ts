import { TaskManager } from "./models";
import { TaskStatus, Task } from "./types";
import { logData, printId, getProperty } from "./utils";

// Create Task Manager
const manager = new TaskManager<Task>();

// Create tasks
const task1: Task = {
  id: 1,
  title: "Learn TypeScript",
  status: TaskStatus.Pending,
  priority: "high",
  createdAt: new Date()
};

const task2: Task = {
  id: "A2",
  title: "Build Console Project",
  status: TaskStatus.InProgress,
  priority: "medium",
  createdAt: new Date()
};

// Add tasks
manager.addTask(task1);
manager.addTask(task2);

// Print all tasks
logData(manager.getTasks());

// Update status
manager.updateStatus(1, TaskStatus.Completed);

// Filter
const highPriority = manager.filterByPriority("high");
logData(highPriority);

// Type narrowing demo
printId(task2.id);

// keyof demo
const title = getProperty(task1, "title");
console.log("Task title:", title);