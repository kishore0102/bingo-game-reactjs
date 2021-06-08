import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./components/Game";

export default class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <MainPage />} />
            <Route exact path="/game" component={() => <Game />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
