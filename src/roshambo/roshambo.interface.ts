export enum Options {
  ROCK = "rock",
  PAPER = "paper",
  SCISSOR = "scissor",
  PENCIL = "pencil",
}

export interface Query {
  comp1: Options;
  comp2: Options;
}

export interface Result {
  result: string;
}
