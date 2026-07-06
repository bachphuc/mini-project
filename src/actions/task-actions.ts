import { generateID, getData, saveData } from "../core/data.service";
import { Task } from "../models/models";

export function createTask(task: Task): Task {
  var _data = getData();
  // Implementation for creating a task
  if(!task.id){
    task.id = generateID();
     _data.tasks.push(task);
     saveData();
  }
 
  return task;
}
