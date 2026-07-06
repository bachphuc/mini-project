import { translateRequest } from './command-parser';
import { initData } from './data.service';
import startServer from './server.service';

export default function AppStart() {
  initData();
  startServer();

  console.log("AppService started");
}

