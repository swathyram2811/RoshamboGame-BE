import express from "express";
import { Options } from "./roshambo.interface";

class RoshamboMiddleware {
  validateComputerOptions(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const comp1: any = req.query.comp1;
    const comp2: any = req.query.comp2;
    if (comp1 && comp2) {
      const values: string[] = Object.values(Options);
      if (!(values.includes(comp1) && values.includes(comp2))) {
        res.status(400).send({
          error: "Invalid options sent in parameters",
        });
      } else next();
    } else {
      res.status(400).send({
        error: "Missing options to validate",
      });
    }
  }
}

export default new RoshamboMiddleware();
