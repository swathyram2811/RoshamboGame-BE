import * as http from "http";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { Config } from "./config";
import { Routes } from "./common/common.routes";
import { Roshambo } from "./roshambo/roshambo.routes";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: Routes[] = [];

const corsOptions = {
  origin: `http://localhost:${Config.CLIENT_PORT}`,
  optionsSuccessStatus: 200,
  methods: "GET",
};

app.use(express.json());
app.use(cors(corsOptions));

routes.push(new Roshambo(app));

const health = `Express running at http://localhost:${Config.SERVER_PORT}`;

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(health);
});

server.listen(Config.SERVER_PORT, () => {
  routes.forEach((route: Routes) => {
    route.configureRoutes();
    console.log(`Configured routes ${route.getName()}`);
  });
  console.log(health);
});

export default server;
