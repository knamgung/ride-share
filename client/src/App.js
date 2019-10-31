import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./styles/style.css";
import Navbar from "./components/Navbar.js";
import Carpool from "./components/Carpool.js";
import Passengers from "./components/Passengers.js";
import PassengerDetail from "./components/PassengerDetail.js";
import CreatePool from "./components/CreatePool";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              return <Carpool></Carpool>;
            }}
            exact
          ></Route>
          <Route
            path="/ride"
            render={() => {
              return <CreatePool></CreatePool>;
            }}
          ></Route>

          <Route
            path="/:id"
            exact
            render={props => {
              return <Passengers {...props}></Passengers>;
            }}
          ></Route>
          <Route
            path="/:id/:userId"
            render={props => {
              return <PassengerDetail {...props}></PassengerDetail>;
            }}
          ></Route>
        </Switch>
        <Navbar></Navbar>
      </div>
    );
  }
}
