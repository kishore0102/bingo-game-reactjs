import React, { Component } from "react";
import GameHeader from "./GameHeader";
import GameTable from "./GameTable";

export default class Game extends Component {
  state = {
    gamePointAi: 0,
    gameInputAi: [],
    gameBingo: ["B", "I", "N", "G", "O"],
    gamePoint: 0,
    userInput: [],
    currentInput: 0,
    isGameStarted: false,
  };

  componentDidMount = (e) => {
    let gameInputAi = [];
    for (let i = 0; i < 25; i++) {
      gameInputAi[i] = i + 1;
    }
    this.setState({ gameInputAi });
  };

  componentDidUpdate = (e) => {
    if (this.state.gamePoint >= 5) {
      alert("Congratulations! You have won the BINGO...");
      window.location.replace("/");
    } else if (this.state.gamePointAi >= 5) {
      alert("You lost! Better luck next time...");
      window.location.replace("/");
    }
  };

  addNumberToUserInput = (e) => {
    let clickedBox = e.target.id.split("input")[1];
    let userInput = this.state.userInput;
    let currentInput = this.state.currentInput;
    currentInput = currentInput + 1;
    userInput[clickedBox] = currentInput;
    this.setState({ currentInput });
    this.setState({ userInput });
  };

  strikeNumberInUserInput = (e) => {
    let pos = e.target.id.split("input")[1];
    let userInput = this.state.userInput;
    let userChosenNumber = userInput[pos];
    userInput[pos] = "*";
    this.setState({ userInput });

    // strike number in AI input
    let gameInputAi = this.state.gameInputAi;
    for (let i = 0; i < 25; i++) {
      if (gameInputAi[i] === userChosenNumber) {
        gameInputAi[i] = "*";
      }
    }
    this.setState({ gameInputAi });

    let hasBotChoseNumber = false;
    let botChosenNumber = false;

    while (!hasBotChoseNumber) {
      let randomNumber = Math.floor(Math.random() * 24);
      if (gameInputAi[randomNumber] !== "*") {
        botChosenNumber = gameInputAi[randomNumber];
        gameInputAi[randomNumber] = "*";
        hasBotChoseNumber = true;
      }
    }

    this.setState({ gameInputAi });

    for (let i = 0; i < 25; i++) {
      if (userInput[i] === botChosenNumber) {
        userInput[i] = "*";
      }
    }
    this.setState({ userInput });

    this.checkForBingo();

    alert("BOT has selected # " + botChosenNumber);
  };

  handleStartGameButton = (e) => {
    let isGameStarted = true;
    this.setState({ isGameStarted });
  };

  checkForBingo = (e) => {
    let userScore = 0;
    let userInput = this.state.userInput;

    let aiScore = 0;
    let gameInputAi = this.state.gameInputAi;

    // user score logic

    if (
      userInput[0] === "*" &&
      userInput[1] === "*" &&
      userInput[2] === "*" &&
      userInput[3] === "*" &&
      userInput[4] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[5] === "*" &&
      userInput[6] === "*" &&
      userInput[7] === "*" &&
      userInput[8] === "*" &&
      userInput[9] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[10] === "*" &&
      userInput[11] === "*" &&
      userInput[12] === "*" &&
      userInput[13] === "*" &&
      userInput[14] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[15] === "*" &&
      userInput[16] === "*" &&
      userInput[17] === "*" &&
      userInput[18] === "*" &&
      userInput[19] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[20] === "*" &&
      userInput[21] === "*" &&
      userInput[22] === "*" &&
      userInput[23] === "*" &&
      userInput[24] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[0] === "*" &&
      userInput[5] === "*" &&
      userInput[10] === "*" &&
      userInput[15] === "*" &&
      userInput[20] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[1] === "*" &&
      userInput[6] === "*" &&
      userInput[11] === "*" &&
      userInput[16] === "*" &&
      userInput[21] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[2] === "*" &&
      userInput[7] === "*" &&
      userInput[12] === "*" &&
      userInput[17] === "*" &&
      userInput[22] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[3] === "*" &&
      userInput[8] === "*" &&
      userInput[13] === "*" &&
      userInput[18] === "*" &&
      userInput[23] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[4] === "*" &&
      userInput[9] === "*" &&
      userInput[14] === "*" &&
      userInput[19] === "*" &&
      userInput[24] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[0] === "*" &&
      userInput[6] === "*" &&
      userInput[12] === "*" &&
      userInput[18] === "*" &&
      userInput[24] === "*"
    ) {
      userScore++;
    }

    if (
      userInput[4] === "*" &&
      userInput[8] === "*" &&
      userInput[12] === "*" &&
      userInput[16] === "*" &&
      userInput[20] === "*"
    ) {
      userScore++;
    }

    // AI score logic

    if (
      gameInputAi[0] === "*" &&
      gameInputAi[1] === "*" &&
      gameInputAi[2] === "*" &&
      gameInputAi[3] === "*" &&
      gameInputAi[4] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[5] === "*" &&
      gameInputAi[6] === "*" &&
      gameInputAi[7] === "*" &&
      gameInputAi[8] === "*" &&
      gameInputAi[9] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[10] === "*" &&
      gameInputAi[11] === "*" &&
      gameInputAi[12] === "*" &&
      gameInputAi[13] === "*" &&
      gameInputAi[14] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[15] === "*" &&
      gameInputAi[16] === "*" &&
      gameInputAi[17] === "*" &&
      gameInputAi[18] === "*" &&
      gameInputAi[19] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[20] === "*" &&
      gameInputAi[21] === "*" &&
      gameInputAi[22] === "*" &&
      gameInputAi[23] === "*" &&
      gameInputAi[24] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[0] === "*" &&
      gameInputAi[5] === "*" &&
      gameInputAi[10] === "*" &&
      gameInputAi[15] === "*" &&
      gameInputAi[20] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[1] === "*" &&
      gameInputAi[6] === "*" &&
      gameInputAi[11] === "*" &&
      gameInputAi[16] === "*" &&
      gameInputAi[21] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[2] === "*" &&
      gameInputAi[7] === "*" &&
      gameInputAi[12] === "*" &&
      gameInputAi[17] === "*" &&
      gameInputAi[22] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[3] === "*" &&
      gameInputAi[8] === "*" &&
      gameInputAi[13] === "*" &&
      gameInputAi[18] === "*" &&
      gameInputAi[23] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[4] === "*" &&
      gameInputAi[9] === "*" &&
      gameInputAi[14] === "*" &&
      gameInputAi[19] === "*" &&
      gameInputAi[24] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[0] === "*" &&
      gameInputAi[6] === "*" &&
      gameInputAi[12] === "*" &&
      gameInputAi[18] === "*" &&
      gameInputAi[24] === "*"
    ) {
      aiScore++;
    }

    if (
      gameInputAi[4] === "*" &&
      gameInputAi[8] === "*" &&
      gameInputAi[12] === "*" &&
      gameInputAi[16] === "*" &&
      gameInputAi[20] === "*"
    ) {
      aiScore++;
    }

    this.setState({ gamePoint: userScore });
    this.setState({ gamePointAi: aiScore });
  };

  render() {
    let startGameButtonStatus = true;

    if (this.state.currentInput === 25) {
      startGameButtonStatus = false;
    }

    if (this.state.isGameStarted) {
      startGameButtonStatus = true;
    }

    return (
      <React.Fragment>
        <div className="gamecontainer">
          <GameHeader
            whoPlays={"B O T"}
            gameBingo={this.state.gameBingo}
            gamePoint={this.state.gamePointAi}
          />
          <br />
          <br />
          <br />
          <GameHeader
            whoPlays={"Y O U"}
            gameBingo={this.state.gameBingo}
            gamePoint={this.state.gamePoint}
          />
          <br />
          <br />
          <GameTable
            userInput={this.state.userInput}
            addNumberToUserInput={this.addNumberToUserInput}
            strikeNumberInUserInput={this.strikeNumberInUserInput}
            isGameStarted={this.state.isGameStarted}
          />
          <br />
          <br />
          <div className="d-flex justify-content-around">
            <button
              type="button"
              id="guessbutton"
              className="btn btn-success"
              disabled={startGameButtonStatus ? "disabled" : ""}
              onClick={this.handleStartGameButton}
            >
              Start the game ...
            </button>
          </div>
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}
