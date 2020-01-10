import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";

export class WeatherRow extends Component {
  render() {
    const locationData = this.props.location;
    return (
      <Row className={"entry"}>
        <Col>
          <img
            src={`http://openweathermap.org/img/wn/${locationData.weather[0].icon}@2x.png`}
            alt={`${locationData.weather[0].description}`}
          ></img>
          Location: {locationData.name}, {locationData.sys.country}
        </Col>
        {/* <Col className={"location"}>
          {" "}
          
        </Col> */}
        <Col className={"temp"}>
          Temperature: {locationData.main.temp} &deg; F
        </Col>
      </Row>
    );
  }
}

export default WeatherRow;
