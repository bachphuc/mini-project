export type UserRole = "user" | "admin" | 'leader';
export type TaskStatus = "new" | "in-progress" | "done";

export interface User {
  id: number;
  name: string;
  email: string;
  role?: UserRole;
}

export interface Epic{
  id: number;
  title: string;
  description: string;
  createdUserID: number;
}

export interface Project{
  id: number;
  title: string;
  description: string;
  createdUserID: number;
}

export interface Task{
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdUserID: number;
  assignedUserID: number;
  epicID?: number;
  projectID?: number;
  estimatedTimeInMinutes?: number;
  deadlineDate?: Date;
  startDate?: Date;
  completedDate?: Date;
  dependencyTaskIDs?: number[];
}

