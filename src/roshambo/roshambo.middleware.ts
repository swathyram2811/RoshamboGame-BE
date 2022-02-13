import express from "express";
import { Options, Query } from "./roshambo.interface";

class RoshamboMiddleware {
  validateComputerOptions(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { play1, play2 } = req.query as unknown as Query;
    if (play1 && play2) {
      const values: string[] = Object.values(Options);
      if (!values.includes(play1)) {
        res.status(400).send({
          error: `Invalid option ${play1}`,
        });
      } else if (!values.includes(play2)) {
        res.status(400).send({
          error: `Invalid option ${play2}`,
        });
      } else next();
    } else {
      res.status(400).send({
        error: "Missing parameters of player1 or player2 to validate",
      });
    }
  }
}

export default new RoshamboMiddleware();
