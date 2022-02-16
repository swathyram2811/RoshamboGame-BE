import { Options } from "../roshambo/roshambo.interface";

export const keyWinsRule = {
  // Rock beats Scissor and Pencil
  [Options.ROCK]: [Options.SCISSOR, Options.PENCIL],

  // Scissor beats Paper and Pencil
  [Options.SCISSOR]: [Options.PAPER, Options.PENCIL],

  // Paper beats Rock
  [Options.PAPER]: [Options.ROCK],

  // Pencil beats Paper
  [Options.PENCIL]: [Options.PAPER],

  // add new rules here and also update in Options interface
};
