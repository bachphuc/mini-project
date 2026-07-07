import express, { type Express, type Request, type Response } from 'express';
import bodyParser from 'body-parser';
import { translateRequest } from './command-parser';
import { getData } from './data.service';

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
    let data = getData();
    res.send(data);
  });

  app.listen(3002);
}