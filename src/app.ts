import * as http from "http";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import { config } from "./config";
import { Routes } from "./common/common.routes";
import { Roshambo } from "./roshambo/roshambo.routes";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Routes[] = [];

app.use(express.json());

routes.push(new Roshambo(app));

const health = `Express running at http://localhost:${config.SERVER_PORT}`;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(health);
});

server.listen(config.SERVER_PORT, () => {
  routes.forEach((route: Routes) => {
    route.configureRoutes();
    console.log(`Configured routes ${route.getName()}`);
  });
  console.log(health);
});

export default server;
