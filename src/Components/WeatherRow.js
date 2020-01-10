import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../App.css";

export class WeatherRow extends Component {
  render() {
    return (
      <Row height={33} className={"entry"}>
        <Col>
          {" "}
          Location: {this.props.location.name},{" "}
          {this.props.location.sys.country}{" "}
        </Col>
        <Col className={"temp"}>
          Temperature: {this.props.location.main.temp} &deg; F
        </Col>
      </Row>
    );
  }
}

export default WeatherRow;
