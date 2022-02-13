import express from "express";
import { Routes } from "../common/common.routes";
import roshamboMiddleware from "./roshambo.middleware";
import roshamboController from "./roshambo.controller";

export class Roshambo extends Routes {
  constructor(app: express.Application) {
    super(app, "Roshmabo Route");
  }

  configureRoutes() {
    this.app
      .route("/api/getResult")
      .all(roshamboMiddleware.validateComputerOptions)
      .get(roshamboController.getResult);

    return this.app;
  }
}
