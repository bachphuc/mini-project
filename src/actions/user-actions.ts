import { generateID, getDataStore, commitDataStore } from "../core/data.service";
import { User } from "../models/entity-models";

export function createUser(user: User): User {
  const _data = getDataStore();
  const newUser: User = {
    id: user.id || 0,
    name: user.name,
    email: user.email,
    role: 'user'  // Default role is 'user'
  };

  if (!newUser.id) {
    // Check if email is already in use
    const existingUser = _data.users.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
    if (existingUser) {
      console.log(`User with email ${newUser.email} already exists. Skipping creation.`);
      return existingUser;
    }
    newUser.id = generateID();
    _data.users.push(newUser);
    commitDataStore();
  }
  else{
    console.log(`User with ID ${newUser.id} already exists. Skipping creation.`);
  }


  return newUser;
}