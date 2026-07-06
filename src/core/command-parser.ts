import { createUserHandler } from "../handles/user-handles";

export type CmdAction = 'CreateUser' | 'CreateTask' | 'CreateProject' | 'CreateEpic' | 'UpdateUser' | 'UpdateTask' | 'UpdateProject' | 'UpdateEpic' | 'DeleteUser' | 'DeleteTask' | 'DeleteProject' | 'DeleteEpic';

interface CmdRS {
  action: CmdAction;
  data: any;
}

function parseCreateUserCommand(text: string): CmdRS | null {
  // prompt: "Create user with name 'John Doe' and email 'john.doe@example.com'"

  const regex = /Create[ ]+user[ ]+with[ ]+name[ ]+'(.+)'[ ]+and[ ]+email[ ]+'(.+)'/i;
  const match = text.match(regex);

  if (!match) {
    return null;
  }

  return {
    action: 'CreateUser',
    data: {
      name: match[1],
      email: match[2]
    }
  };
}

function parseCreateTaskCommand(text: string): CmdRS | null {
  // prompt: "Create task with title 'Task Title' and description 'Task Description'"
  const regex = /Create task with title '(.+)' and description '(.+)'/;
  const match = text.match(regex);

  if (!match) {
    return null;
  }
  return {
    action: 'CreateTask',
    data: {
      title: match[1],
      description: match[2]
    }
  };
}

export function translateRequest(text: string) {
  // Implementation for translating the request

  var cmd = parseCreateUserCommand(text) || parseCreateTaskCommand(text);

  if(!cmd){
    console.log("No valid command found in the request.");
    return;
  }

  switch (cmd.action) {
    case 'CreateUser':
      console.log(`Creating user with name: ${cmd.data.name} and email: ${cmd.data.email}`);
      createUserHandler(cmd.data);
      break;
    case 'CreateTask':
      console.log(`Creating task with title: ${cmd.data.title} and description: ${cmd.data.description}`);
      break;
    default:
      console.log("Unknown command action.");
  }
}
