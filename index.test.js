const assert = require("assert");
const Match = require("./index")();
const expect = require("expect.js");

const __defaults = () => {
  return {
    matchNonStarted: "0-0",
    pA_win_pB_15: "15-0",
    pA_eq_pB_15: "15-15",
    pA0_eq_pB_30: "0-30",
    pA40_eq_pB_15: "40-15"
  };
};

describe("A tennis game", () => {
  it("Check match is not started...", () => {
    expect(Match.checkGameStarts()).to.eql(__defaults().matchNonStarted);
  });
  it("Check player_A: 15, player_B: 0...", () => {
    Match.incPlayerScore("player_A");
    expect(Match.getPlayersScore()).to.eql(__defaults().pA_win_pB_15);
  });
  it("Check player_A: 15, player_B: 15...", () => {
    Match.incPlayerScore("player_B");
    expect(Match.getPlayersScore()).to.eql(__defaults().pA_eq_pB_15);
  });
  it("Check player_A: 0, player_B: 30...", () => {
    Match.resetMatch();

    Match.incPlayerScore("player_B");
    Match.incPlayerScore("player_B");

    expect(Match.getPlayersScore()).to.eql(__defaults().pA0_eq_pB_30);
  });
  it("Check player_A: 40, player_B: 15...", () => {
    Match.resetMatch();

    Match.incPlayerScore("player_A");
    Match.incPlayerScore("player_A");
    Match.incPlayerScore("player_A"); // 40

    Match.incPlayerScore("player_B"); // 15

    expect(Match.getPlayersScore()).to.eql(__defaults().pA40_eq_pB_15);
  });
  it("Check player_A: 40, player_B: 15...", () => {
    Match.resetMatch();

    Match.incPlayerScore("player_A");
    Match.incPlayerScore("player_A");
    Match.incPlayerScore("player_A"); // 40

    Match.incPlayerScore("player_B"); // 15

    expect(Match.getPlayersScore()).to.eql(__defaults().pA40_eq_pB_15);
  });
});
