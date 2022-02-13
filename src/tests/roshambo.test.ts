import { expect } from "chai";
import supertest from "supertest";

import server from "../app";

describe("Roshambo Game - Test Cases", () => {
  let request: supertest.SuperAgentTest;
  before(() => {
    request = supertest.agent(server);
    console.log("<------SERVICES RUNNING------>");
  });

  it("Game Parameters - Missing Options", async () => {
    const result = await request.get("/api/getResult?play1=SCISSOR").send();
    expect(result.status).to.equal(400);
    expect(result.body).not.to.be.empty;
    expect(result.body.error).to.contain("Missing parameters");
  });

  it("Game Parameters - Invalid Options", async () => {
    const result = await request
      .get("/api/getResult?play1=SCISOR&play2=PAPER")
      .send();
    expect(result.status).to.equal(400);
    expect(result.body).not.to.be.empty;
    expect(result.body.error).to.contain("Invalid option");
  });

  it("Game Result - Success (Combination 1)", async () => {
    const result = await request
      .get("/api/getResult?play1=ROCK&play2=PAPER")
      .send();
    expect(result.status).to.equal(200);
    expect(result.body).not.to.be.empty;
    expect(result.body.result).to.equal("play2");
  });

  it("Game Result - Success (Combination 2)", async () => {
    const result = await request
      .get("/api/getResult?play1=ROCK&play2=SCISSOR")
      .send();
    expect(result.status).to.equal(200);
    expect(result.body).not.to.be.empty;
    expect(result.body.result).to.equal("play1");
  });

  it("Game Result - Success (Combination 3)", async () => {
    const result = await request
      .get("/api/getResult?play1=ROCK&play2=ROCK")
      .send();
    expect(result.status).to.equal(200);
    expect(result.body).not.to.be.empty;
    expect(result.body.result).to.equal("Tied");
  });
  after((done) => {
    server.close(() => {
      console.log("<------SERVICES CLOSED------>");
      done();
    });
  });
});
