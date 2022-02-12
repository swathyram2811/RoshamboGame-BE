import { Options } from "../roshambo/roshambo.interface";

export const keyWinsRule = {
  [Options.ROCK]: [Options.SCISSOR, Options.PENCIL],
  [Options.SCISSOR]: [Options.PAPER, Options.PENCIL],
  [Options.PAPER]: [Options.ROCK],
  [Options.PENCIL]: [Options.PAPER],
};
