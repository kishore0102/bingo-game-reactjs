import React, { Component } from "react";
import GameTableRow from "./GameTableRow";

export default class GameTable extends Component {
  render() {
    let userInput = this.props.userInput;

    let userInputRow1 = [
      userInput[0],
      userInput[1],
      userInput[2],
      userInput[3],
      userInput[4],
    ];

    let userInputRow2 = [
      userInput[5],
      userInput[6],
      userInput[7],
      userInput[8],
      userInput[9],
    ];

    let userInputRow3 = [
      userInput[10],
      userInput[11],
      userInput[12],
      userInput[13],
      userInput[14],
    ];

    let userInputRow4 = [
      userInput[15],
      userInput[16],
      userInput[17],
      userInput[18],
      userInput[19],
    ];

    let userInputRow5 = [
      userInput[20],
      userInput[21],
      userInput[22],
      userInput[23],
      userInput[24],
    ];

    return (
      <React.Fragment>
        <div className="flex1">
          <GameTableRow
            gameRow={userInputRow1}
            gameRowNumber={0}
            addNumberToUserInput={this.props.addNumberToUserInput}
            isGameStarted={this.props.isGameStarted}
            strikeNumberInUserInput={this.props.strikeNumberInUserInput}
          />
        </div>
        <div className="flex1">
          <GameTableRow
            gameRow={userInputRow2}
            gameRowNumber={5}
            addNumberToUserInput={this.props.addNumberToUserInput}
            isGameStarted={this.props.isGameStarted}
            strikeNumberInUserInput={this.props.strikeNumberInUserInput}
          />
        </div>
        <div className="flex1">
          <GameTableRow
            gameRow={userInputRow3}
            gameRowNumber={10}
            addNumberToUserInput={this.props.addNumberToUserInput}
            isGameStarted={this.props.isGameStarted}
            strikeNumberInUserInput={this.props.strikeNumberInUserInput}
          />
        </div>
        <div className="flex1">
          <GameTableRow
            gameRow={userInputRow4}
            gameRowNumber={15}
            addNumberToUserInput={this.props.addNumberToUserInput}
            isGameStarted={this.props.isGameStarted}
            strikeNumberInUserInput={this.props.strikeNumberInUserInput}
          />
        </div>
        <div className="flex1">
          <GameTableRow
            gameRow={userInputRow5}
            gameRowNumber={20}
            addNumberToUserInput={this.props.addNumberToUserInput}
            isGameStarted={this.props.isGameStarted}
            strikeNumberInUserInput={this.props.strikeNumberInUserInput}
          />
        </div>
      </React.Fragment>
    );
  }
}
