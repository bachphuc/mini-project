import express, { type Express, type Request, type Response } from 'express';
import { translateRequest } from './command-parser';

export default function startServer() {
  const app: Express = express();

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
    if(req.body.cmd){
      translateRequest(req.body.cmd);
    }
    res.send(`Got a POST request: ${JSON.stringify(req.body)}`);
  });

  app.listen(3000);
}