import React, { Component } from "react";
import kevin from "../assets/users/kevin.jpg";
import ken from "../assets/users/ken.jpg";

export default class PassengerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rideTotal: 5,
      rideCost: 13.15
    };
  }

  changeCost = e => {
    e.preventDefault();
    this.setState({
      rideCost: e.target.value
    });
  };

  changeTotal = e => {
    e.preventDefault();
    this.setState({
      rideTotal: e.target.value
    });
  };
  render() {
    return (
      <div className="passengerDetail">
        <div className="detail">
          <div
            className="detail__photo"
            style={{ backgroundImage: `url(${kevin})` }}
          >
            <div className="detail__title">
              <h3 className="detail__name">Kevin Tang</h3>
            </div>
          </div>
          <div className="detail__main">
            <div className="detail__info">
              <h2 className="detail__subhead">Total Rides:</h2>
              <div className="detail__quant--borderRide">
                <h2 className="detail__quant">{this.state.rideTotal}</h2>
              </div>
            </div>
            <div className="detail__info">
              <h2 className="detail__subhead">Amount Owed:</h2>
              <div className="detail__quant--border">
                <h2 className="detail__quant">
                  {`$${(this.state.rideTotal * this.state.rideCost).toFixed(
                    2
                  )}`}
                </h2>
              </div>
            </div>
            <div className="detail__edit">
              <p className="detail__email">ktangeroo@gmail.com</p>
            </div>
          </div>
        </div>
        <RideInput
          rideTotal={this.state.rideTotal}
          changeTotal={this.changeTotal}
        ></RideInput>
        <RideCost
          rideCost={this.state.rideCost}
          changeCost={this.changeCost}
        ></RideCost>
      </div>
    );
  }
}

const RideInput = ({ rideTotal, changeTotal }) => {
  return (
    <div className="input">
      <h2 className="input__title">TOTAL RIDES</h2>
      <form className="input__form">
        <input
          type="number"
          name="points"
          min="0"
          max="1,000,000"
          step="1"
          defaultValue={rideTotal}
          onChange={changeTotal}
          className="input__input"
        ></input>
        <div className="input__arrows"></div>
      </form>
    </div>
  );
};

const RideCost = ({ rideCost, changeCost }) => {
  return (
    <div className="input">
      <h2 className="input__title">COST PER RIDE</h2>
      <form className="input__form">
        <h2 className="input__currency">$</h2>
        <input
          type="number"
          name="points"
          min="0.00"
          max="1,000,000.00"
          step="0.05"
          className="input__input"
          defaultValue={rideCost}
          onChange={changeCost}
        ></input>
      </form>
      <div>
        <h4>Suggested Cost</h4>
        <p> Calculated based on route distance and current gas prices</p>
      </div>
    </div>
  );
};
