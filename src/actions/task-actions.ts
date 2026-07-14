import { generateID, getDataStore, commitDataStore } from "../core/data.service";
import { Task } from "../models/entity-models";
import { TaskActionRS } from "./action-models";

export interface CreateTaskRS extends TaskActionRS {
  task?: Task
}

export function createTask(task: Task): CreateTaskRS {
  const rs: CreateTaskRS = {
    status: true,
  };
  var _data = getDataStore();
  // Implementation for creating a task
  if (!task.id) {
    task.id = generateID();
    _data.tasks.push(task);
    commitDataStore();
  }

  rs.task = task;

  return rs;
}

export interface FilterTasksRQ {

}

export interface FilterTasksRS extends TaskActionRS {
  tasks: Task[],
}

export function filterTasks(filter: FilterTasksRQ): FilterTasksRS {
  const data = getDataStore();
  return {
    status: true,
    tasks: data.tasks
  };
}

export interface TaskDetailRS extends TaskActionRS {
  task?: Task,
}

export function getTaskDetail(id: number): TaskDetailRS {
  const data = getDataStore();
  const task = data.tasks.find(e => e.id == id);

  if(!task){
    return {
      status: false,
      errorCode: 404
    }
  }
  return {
    status: true,
    task: task
  };
}

export interface UpdateTaskRS extends TaskActionRS {
  task?: Task
}

export function updateTask(id: number, data: Task): UpdateTaskRS {
  let taskRS = getTaskDetail(id);
  if(!taskRS.status){
    return taskRS;
  }

  const task = taskRS.task as Task;

  const rs: UpdateTaskRS = {
    status: true,
    task: task
  };
  
  task.title = data.title;
  task.description = data.description;

  commitDataStore();
  
  return rs;
}