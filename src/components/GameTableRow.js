import React, { Component } from "react";

export default class GameTableRow extends Component {
  render() {
    let isGameStarted = this.props.isGameStarted;

    return (
      <React.Fragment>
        <div className="flex1">
          {this.props.gameRow.map((value, index) => {
            return (
              <button
                className="btn btn-squared-default btn-outline-dark"
                style={value === "*" ? { backgroundColor: "grey" } : {}}
                key={"input" + (this.props.gameRowNumber + index)}
                id={"input" + (this.props.gameRowNumber + index)}
                onClick={
                  isGameStarted
                    ? this.props.strikeNumberInUserInput
                    : this.props.addNumberToUserInput
                }
                disabled={value && !isGameStarted ? "disabled" : ""}
              >
                {value}
              </button>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
