import express from "express";
import { Options, Query } from "./roshambo.interface";

class RoshamboMiddleware {
  validateComputerOptions(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { val1, val2 } = req.query as unknown as Query;
    if (val1 && val2) {
      const values: string[] = Object.values(Options);
      if (!values.includes(val1)) {
        res.status(400).send({
          error: `Invalid option ${val1}`,
        });
      } else if (!values.includes(val2)) {
        res.status(400).send({
          error: `Invalid option ${val2}`,
        });
      } else next();
    } else {
      res.status(400).send({
        error: "Missing parameters val1 or val2 to validate",
      });
    }
  }
}

export default new RoshamboMiddleware();
