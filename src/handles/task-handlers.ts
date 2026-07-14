import { createTask } from "../actions/task-actions";
import { Task } from "../models/entity-models";

export function createTaskHandler(input: any){
  var params: Task = input as Task;

  createTask(params);
}