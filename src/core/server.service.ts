import express, { type Express, type Request, type Response } from 'express';
import bodyParser from 'body-parser';
import { translateRequest } from './command-parser';
import { getDataStore } from './data.service';
import { createTask, filterTasks, getTaskDetail, updateTask } from '../actions/task-actions';

const DEFAULT_PORT = 3002;
const SERVER_PORT: number = parseInt(process.env.PORT || `${DEFAULT_PORT}`) || DEFAULT_PORT;

export default function startServer() {
  const app: Express = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded());

  // parse application/json
  app.use(bodyParser.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Service Hello World!');
  });

  app.get('/cmd', (req, res) => {
    if (req.query.cmd) {
      translateRequest(req.query.cmd as string);
    }
    res.send(`Got a GET request: ${JSON.stringify(req.query)}`);
  });

  app.post('/cmd', (req, res) => {
    if (req.body.cmd) {
      translateRequest(req.body.cmd);
    }
    res.send(`Got a POST request: ${JSON.stringify(req.body)}`);
  });

  app.get('/dashboard', (req, res) => {
    let data = getDataStore();
    res.send(data);
  });

  // BEGIN: Tasks API
  app.post('/tasks', (req, res) => {
    const rs = createTask(req.body);
    res.send(rs);
  });

  app.put('/tasks/:id', (req, res) => {
    const rs = updateTask(parseInt(req.params.id), req.body);
    res.send(rs);
  });

  app.get('/tasks', (req, res) => {
    const rs = filterTasks(req.query);
    res.send(rs);
  });

  app.get('/tasks/:id', (req, res) => {
    const rs = getTaskDetail(parseInt(req.params.id));
    res.send(rs);
  });
  // END: Tasks API

  app.listen(SERVER_PORT);
}