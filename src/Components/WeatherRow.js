import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../App.css";
import { Container } from "react-bootstrap";

//Represents the row of each location, has name, current weather, and temperature
export class WeatherRow extends Component {
  render() {
    const locationData = this.props.location;
    return (
      <Container>
        <Row>
          <Col className={"col-11"}>
            <Row className={"entry"}>
              <Col className="col-1">
                <img
                  src={`http://openweathermap.org/img/wn/${locationData.weather[0].icon}@2x.png`}
                  alt={`${locationData.weather[0].description}`}
                ></img>
              </Col>
              <Col className="col-8 info">
                {locationData.name}, {locationData.sys.country} <br></br>
                Weather: {locationData.weather[0].description}
              </Col>
              <Col className={"col-3 temp"}>
                {locationData.main.temp} &deg; F
              </Col>
            </Row>
          </Col>
          <Col className={"col-1"}>
            <Button
              variant="danger"
              className={"removeButton"}
              onClick={this.props.removeTask.bind(this, locationData.sys.id)}
            >
              x
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WeatherRow;
