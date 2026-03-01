export enum TaskStatus {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
}

//Union + Literal Types
export type Priority = "Low" | "Medium" | "High";


// Type Alias 
export type ID = string | number;

// Interface
export interface Task {
    id: ID;
    title: string;
    status: TaskStatus;
    priority: Priority;
    createdAt: Date;
}

//Generic API Response
export interface ApiResponse<T> {
    success: boolean;
    data: T;
}

// Utility Type Example
export type PartialTask = Partial<Task>;