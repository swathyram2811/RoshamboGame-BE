import { keyWinsRule } from "../constants/rules";
import { Options, Result } from "./roshambo.interface";

class RoshamboService {
  getResult(play1: Options, play2: Options): Promise<Result> {
    return new Promise((resolve, reject) => {
      try {
        const values: string[] = keyWinsRule[play1];
        if (play1 == play2) {
          resolve({
            result: "Tied",
          });
        } else if (values.includes(play2)) {
          resolve({
            result: "play1",
          });
        } else
          resolve({
            result: "play2",
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

export default new RoshamboService();
