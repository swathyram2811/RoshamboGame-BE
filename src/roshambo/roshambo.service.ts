import { keyWinsRule } from "../constants/rules";
import { Options } from "./roshambo.interface";

class RoshamboService {
  getResult(comp1: Options, comp2: Options): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        if (comp1 == comp2) {
          resolve("Match Tied");
        } else if (keyWinsRule[comp1].includes(comp2)) {
          resolve("Computer1");
        } else resolve("Computer2");
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

export default new RoshamboService();
