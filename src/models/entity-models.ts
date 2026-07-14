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

export type TaskType = 'Task' | 'Bug' | 'Feature';

export interface Task{
  id: number;
  title: string;
  code?: string;
  description: string;
  type?: TaskType;
  status?: TaskStatus;
  createdUserID: number;
  assignedUserID: number;
  parentTaskID?: number;
  epicID?: number;
  projectID?: number;
  estimatedTimeInMinutes?: number;
  expectedDeadlineDate?: Date;
  startDate?: Date;
  completedDate?: Date;
  dependencyTaskIDs?: number[];
  autoEstimationEndDate?: Date;
  order?: number;
}

