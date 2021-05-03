export class TaskModel {
    id: String;
    title: String;
    description: String;
    status: TaskStatus;
}

export enum TaskStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSE = "CLOSE",
}