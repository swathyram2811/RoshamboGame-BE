export enum Options {
  // add enums here for new Options
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSOR = "SCISSOR",
  PENCIL = "PENCIL",
}

export interface Query {
  play1: Options;
  play2: Options;
}

export interface Result {
  result: string;
}
