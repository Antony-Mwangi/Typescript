import {Task, TaskStatus, Priority} from "./types";

export class TaskManager< T extends Task> {
    private tasks: T[] = [];

    addTask(task: T): void {
        this.tasks.push(task);
    }

getTasks(): Readonly <T[]> {
    return this.tasks;
}

updateTaskStatus(id: T["id"], status: TaskStatus): void {
    const task = this.tasks.find(t => t.id === id);

    if (!task) {
        console.log("Task not found");
        return;
    }

    task.status = status;

}

filterByPriority(priority: Priority): T[] {
    return this.tasks.filter(task => task.priority === priority);
}
}
