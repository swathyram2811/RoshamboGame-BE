export enum Options {
  // add enums here for new game rule
  ROCK = "rock",
  PAPER = "paper",
  SCISSOR = "scissor",
  PENCIL = "pencil",
}

export interface Query {
  val1: Options;
  val2: Options;
}

export interface Result {
  result: string;
}
