import { Epic, Task, User, Project } from "./entity-models";

export interface DataStore{
  incrementalID: number;
  users: User[];
  epics: Epic[];
  projects: Project[];
  tasks: Task[];
}