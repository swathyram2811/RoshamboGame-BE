import express from "express";
import { Query, Result } from "./roshambo.interface";
import roshamboService from "./roshambo.service";

class RoshamboController {
  async getResult(req: express.Request, res: express.Response) {
    const { comp1, comp2 } = req.query as unknown as Query;
    const result: Result = await roshamboService.getResult(comp1, comp2);
    res.status(200).json(result);
  }
}

export default new RoshamboController();
