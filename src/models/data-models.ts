import { Epic, Task, User, Project } from "./models";

export interface DataStore{
  incrementalID: number;
  users: User[];
  epics: Epic[];
  projects: Project[];
  tasks: Task[];
}