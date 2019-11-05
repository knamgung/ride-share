import React, { Component } from "react";
import map from "../assets/route1.png";

export default class CreatePool extends Component {
  state = {
    pickup: {
      addr: "",
      time: null
    },
    dropoff: {
      addr: "",
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
    }
  };

  pickupChange = e => {
    let pickup = this.state.pickup;
    pickup[e.target.name] = e.target.value;
    this.setState({
      pickup
    });
  };

  dropoffChange = e => {
    let dropoff = this.state.dropoff;
    dropoff[e.target.name] = e.target.value;
    this.setState({
      dropoff
    });
  };

  dateSelect = e => {
    console.log(e.target.className);
    let dateState = this.state.date;

    let currentValue = dateState[e.target.className];
    dateState[e.target.className] = !currentValue;

    this.setState({
      date: dateState
    });
  };

  checkDone = () => {
    console.log("hello");
    this.props.history.push("/");
    let data = this.state;
    data.id = 123;
    data.money = 0;
    data.passengers = 0;
    this.props.addRide(data);
  };
  render() {
    console.log(this.state.pickup);
    return (
      <div className="createPool">
        <div className="create">
          <div className="create__to">
            <div className="create__route">
              <input
                placeholder="Pick Up"
                name="addr"
                onChange={this.pickupChange}
              ></input>
              <input
                placeholder="Where To?"
                name="addr"
                onChange={this.dropoffChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="create__map">
          <img src={map} className="create__map--img"></img>
        </div>
        <div className="create__info">
          <div className="createMain">
            <div className="createMain__info">
              <div className="createMain__sub">
                <h5 className="createMain__head">PICK UP</h5>
                <h3 className="createMain__loc">
                  Eaton Centre
                  <br />
                  220 Yonge St, Toronto, ON
                </h3>
              </div>
              <input
                type="time"
                className="createMain__input"
                name="time"
                onChange={this.pickupChange}
              ></input>
            </div>
            <div className="createMain__info">
              <div className="createMain__sub">
                <h5 className="createMain__head">DROP OFF</h5>
                <h3 className="createMain__loc">
                  Waterloo University
                  <br /> 200 University Ave W, Waterloo, ON
                </h3>
              </div>
              <input type="time" className="createMain__input"></input>
            </div>
          </div>
          <div className="date">
            <DateList
              stateDate={this.state.date}
              dateSelect={this.dateSelect}
            ></DateList>
          </div>
          <div className="createMain__done">
            <button className="createMain__button" onClick={this.checkDone}>
              DONE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const DateList = ({ stateDate, dateSelect }) => {
  let dateList = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"].map(
    date => {
      if (stateDate[date]) {
        return (
          <div
            className="date__each"
            name={date}
            style={{ backgroundColor: "#56d88a" }}
          >
            <h3
              className={date}
              style={{ color: "white" }}
              onClick={dateSelect}
            >
              {date}
            </h3>
          </div>
        );
      } else {
        return (
          <div
            className="date__each"
            name={date}
            style={{ backgroundColor: "white" }}
          >
            <h3
              className={date}
              onClick={dateSelect}
              style={{ color: "#56d88a" }}
            >
              {date}
            </h3>
          </div>
        );
      }
    }
  );

  return dateList;
};
