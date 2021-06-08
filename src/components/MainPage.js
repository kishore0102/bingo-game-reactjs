import React, { Component } from "react";

export default class MainPage extends Component {
  state = {};

  handleVsComputerButton = (e) => {
    e.preventDefault();
    window.location.replace("/game");
  };

  render() {
    return (
      <React.Fragment>
        <div className="gamecontainer">
          <h2 className="flex1">
            <i>BINGO GAME</i>
          </h2>
          <br />
          <br />
          <div className="flex1">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleVsComputerButton}
            >
              vs Computer
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
