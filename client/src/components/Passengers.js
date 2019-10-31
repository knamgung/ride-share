import React, { Component } from "react";
import kevin from "../assets/users/kevin.jpg";
import ken from "../assets/users/ken.jpg";
import { Link } from "react-router-dom";
export default class Passengers extends Component {
  render() {
    return (
      <div className="pass">
        <div
          onClick={() => {
            this.props.history.push("./1/1023");
          }}
          className="pass__each"
          style={{ backgroundImage: `url(${kevin})` }}
        >
          <h2 className="pass__name">Kevin Tang</h2>
          <div className="pass__info">
            <p className="pass__info--rides">Rides: 12</p>
            <p className="pass__info--amount">Amount: $48.50</p>
          </div>
        </div>

        <div
          className="pass__each"
          onClick={() => {
            this.props.history.push("./1/1023");
          }}
          style={{ backgroundImage: `url(${ken})` }}
        >
          <h2 className="pass__name">Bean Namgung</h2>
          <div className="pass__info">
            <p className="pass__info--rides">Rides: 2</p>
            <p className="pass__info--amount">Amount: $9</p>
          </div>
        </div>
      </div>
    );
  }
}
