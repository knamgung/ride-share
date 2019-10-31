import React, { Component } from "react";
import map from "../assets/route1.png";

export default class CreatePool extends Component {
  render() {
    return (
      <div className="createPool">
        <div className="create">
          <div className="create__to">
            <div className="create__route">
              <input placeholder="Eaton Center"></input>
              <input placeholder="Waterloo University"></input>
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
              <input type="time" className="createMain__input"></input>
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
            <div className="date__each">
              <h3 className="mon">Mon</h3>
            </div>
            <div className="date__each">
              <h3 className="tues">Tue</h3>
            </div>
            <div className="date__each">
              <h3 className="wed">Wed</h3>
            </div>

            <div className="date__each">
              <h3 className="thur">Thur</h3>
            </div>
            <div className="date__each">
              <h3 className="fri">Fri</h3>
            </div>
            <div className="date__each">
              <h3 className="sat">Sat</h3>
            </div>
            <div className="date__each">
              <h3 className="sun">Sun</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
