import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./styles/style.css";
import Navbar from "./components/Navbar.js";
import Carpool from "./components/Carpool.js";
import Passengers from "./components/Passengers.js";
import PassengerDetail from "./components/PassengerDetail.js";
import CreatePool from "./components/CreatePool";

export default class App extends Component {
  state = {
    rides: [
      {
        pickup: {
          addr: "Toronto",
          time: null
        },
        dropoff: {
          addr: "Waterloo",
          time: null
        },
        date: {
          mon: false,
          tue: false,
          wed: false,
          thur: false,
          fri: false,
          sat: false,
          sun: false
        },
        money: 35.44,
        id: 123,
        passengers: 3
      }
    ]
  };

  addRide = data => {
    let newRide = this.state.rides;
    newRide.push(data);
    this.setState({
      newRide
    });
  };
  render() {
    const { rides } = this.state;
    return (
      <div>
        <Switch>
          <Route
            path="/"
            render={() => {
              return <Carpool rides={rides}></Carpool>;
            }}
            exact
          ></Route>
          <Route
            path="/add"
            render={props => {
              return (
                <CreatePool {...props} addRide={this.addRide}></CreatePool>
              );
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
