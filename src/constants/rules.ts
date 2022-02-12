import { Options } from "../roshambo/roshambo.interface";

export const keyWinsRule = {
  // add new rules here and also update in Options interface
  [Options.ROCK]: [Options.SCISSOR, Options.PENCIL],
  [Options.SCISSOR]: [Options.PAPER, Options.PENCIL],
  [Options.PAPER]: [Options.ROCK],
  [Options.PENCIL]: [Options.PAPER],
};
