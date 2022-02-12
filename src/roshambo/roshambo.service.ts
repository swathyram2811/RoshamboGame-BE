import { keyWinsRule } from "../constants/rules";
import { Options, Result } from "./roshambo.interface";

class RoshamboService {
  getResult(comp1: Options, comp2: Options): Promise<Result> {
    return new Promise((resolve, reject) => {
      try {
        const values: string[] = keyWinsRule[comp1];
        if (comp1 == comp2) {
          resolve({
            result: "Tied",
          });
        } else if (values.includes(comp2)) {
          resolve({
            result: "comp1",
          });
        } else
          resolve({
            result: "comp2",
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

export default new RoshamboService();
