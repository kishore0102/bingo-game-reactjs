import React, { Component } from "react";

export default class GameHeader extends Component {
  render() {
    let gamePoint = this.props.gamePoint;

    return (
      <React.Fragment>
        <div className="flex1">
          <button
            type="button"
            key={this.props.whoPlays}
            className="btn btn-outline-dark"
            disabled={"disabled"}
          >
            {this.props.whoPlays}
          </button>
          {this.props.gameBingo.map((letter, index) => {
            if (gamePoint > 0) {
              gamePoint = gamePoint - 1;
              return (
                <h3
                  key={"header" + index}
                  style={{
                    textDecoration: "line-through",
                    color: "red",
                  }}
                >
                  {letter}
                </h3>
              );
            } else {
              return (
                <h3
                  key={"header" + index}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {letter}
                </h3>
              );
            }
          })}
        </div>
      </React.Fragment>
    );
  }
}
