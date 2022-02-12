import express from "express";
import { Options, Query } from "./roshambo.interface";

class RoshamboMiddleware {
  validateComputerOptions(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { comp1, comp2 } = req.query as unknown as Query;
    if (comp1 && comp2) {
      const values: string[] = Object.values(Options);
      if (!values.includes(comp1)) {
        res.status(400).send({
          error: `Invalid option ${comp1}`,
        });
      } else if (!values.includes(comp2)) {
        res.status(400).send({
          error: `Invalid option ${comp2}`,
        });
      } else next();
    } else {
      res.status(400).send({
        error: "Missing parameters comp1 or comp2 to validate",
      });
    }
  }
}

export default new RoshamboMiddleware();
