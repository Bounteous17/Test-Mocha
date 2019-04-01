let player_A = 0;
let player_B = 0;

const __players = () => {
  return {
    player_A: player_A,
    player_B: player_B
  };
};

const __Game = () => {
  return {
    player_A: __players().player_A,
    player_B: __players().player_B
  };
};

const __checkGameStarts = () => {
  return `${__Game().player_A}-${__Game().player_B}`;
};

const __increasePoint = player => {
  let actualScorePlayer = __getSinglePlayerScore(player);
  let rScore = 0;
  if (
    actualScorePlayer === 0 ||
    actualScorePlayer === null ||
    actualScorePlayer === undefined
  ) {
    rScore = 15;
  } else if (actualScorePlayer === 15) {
    rScore = actualScorePlayer + 15; //30
  } else if (actualScorePlayer === 30) {
    rScore = actualScorePlayer + 10; //40
  }

  return rScore;
};

const __incPlayerScore = player => {
  let iScore = __increasePoint(player);
  if (player === "player_A") {
    player_A = iScore;
  } else if (player === "player_B") {
    player_B = iScore;
  }
  return __getPlayersScore(player);
};

const __getSinglePlayerScore = player => {
  let players = __players();
  return players[player];
};

const __getPlayersScore = () => {
  let players = __players();
  return `${players.player_A}-${players.player_B}`;
};

const __resetMatch = () => {
  player_A = 0;
  player_B = 0;
  return __getPlayersScore();
};

module.exports = () => {
  return {
    Game: __Game,
    checkGameStarts: __checkGameStarts,
    incPlayerScore: __incPlayerScore,
    getPlayersScore: __getPlayersScore,
    resetMatch: __resetMatch
  };
};

// 0, 15, 30, 40

// 0-0
