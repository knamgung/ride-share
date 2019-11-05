import React, { Component } from "react";
import test from "../assets/test.png";
import { Link } from "react-router-dom";
export default class Home extends Component {
  state = {
    allRides: this.props.rides
  };
  render() {
    let { allRides } = this.state;
    console.log(allRides);
    return (
      <div className="carpool">
        <CarpoolRides allRides={allRides}></CarpoolRides>
        <Link to="/add">
          <div className="carpool__add">
            <h1>+</h1>
          </div>
        </Link>
      </div>
    );
  }
}

const CarpoolRides = ({ allRides }) => {
  console.log(allRides);
  let rideList = allRides.map((ride, i) => {
    let { pickup, dropoff, date, money, passengers } = ride;
    return (
      <Link to="/1">
        <div className="carpool__each">
          <div className="carpool__info">
            <div className="carpool__main">
              <h5 className="carpool__route">Route {i}</h5>
              <h3 className="carpool__city">
                {pickup["addr"]} - {[dropoff["addr"]]}
              </h3>
              <p className="carpool__passenger">Passengers: {passengers}</p>
            </div>
            <div className="carpool__money">
              <p className="carpool__owed">
                Money Owed:
                <br />${money}
              </p>
            </div>
          </div>
          <div className="carpool__map">
            <img className="carpool__map--content" src={test}></img>
          </div>
        </div>
      </Link>
    );
  });

  return rideList;
};
