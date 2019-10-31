import React, { Component } from "react";
import test from "../assets/test.png";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="carpool">
        <Link to="/1">
          <div className="carpool__each">
            <div className="carpool__info">
              <div className="carpool__main">
                <h5 className="carpool__route">ROUTE 1</h5>
                <h3 className="carpool__city">Toronto - Waterloo</h3>
                <p className="carpool__passenger">Passengers: 4</p>
              </div>
              <div className="carpool__money">
                <p className="carpool__owed">
                  Money Owed:
                  <br />
                  $76.50
                </p>
              </div>
            </div>
            <div className="carpool__map">
              <img className="carpool__map--content" src={test}></img>
            </div>
          </div>
        </Link>
        <Link to="/add">
          <div className="carpool__each">
            <div className="carpool__info">
              <div className="carpool__main">
                <h5 className="carpool__route">ROUTE 1</h5>
                <h3 className="carpool__city">Toronto - Waterloo</h3>
                <p className="carpool__passenger">Passengers: 4</p>
              </div>
              <div className="carpool__money">
                <p className="carpool__owed">
                  Money Owed:
                  <br />
                  $76.50
                </p>
              </div>
            </div>
            <div className="carpool__map">
              <img className="carpool__map--content" src={test}></img>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
