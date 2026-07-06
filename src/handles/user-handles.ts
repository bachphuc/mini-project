import { createUser } from "../actions/user-actions";
import { User } from "../models/models";

export function createUserHandler(input: any){
  var params: User = input as User;

  createUser(params);
}