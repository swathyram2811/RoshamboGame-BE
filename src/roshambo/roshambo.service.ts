import { keyWinsRule } from "../constants/rules";
import { Options, Result } from "./roshambo.interface";

class RoshamboService {
  getResult(val1: Options, val2: Options): Promise<Result> {
    return new Promise((resolve, reject) => {
      try {
        const values: string[] = keyWinsRule[val1];
        if (val1 == val2) {
          resolve({
            result: "Tied",
          });
        } else if (values.includes(val2)) {
          resolve({
            result: "val1",
          });
        } else
          resolve({
            result: "val2",
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

export default new RoshamboService();
