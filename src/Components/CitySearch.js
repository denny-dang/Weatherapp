import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

const APIkey = "75dafe01b1b931522bfc501eab4275fb";

// class WeatherCity {
//   constructor(id, city, state, temp) {
//     this.id = id;
//     this.city = city;
//     this.state = state;
//     this.temp = temp;
//   }
// }

export class CitySearch extends Component {
  state = {
    city: "",
    country: ""
  };

  getWeather = async (city, country) => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${APIkey}`
    );
    const response = await api_call.json();
    return response;
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = async (event) => {
    event.preventDefault();
    const weatherData = await this.getWeather(
      this.state.city,
      this.state.country
    );
    this.props.addLocation(weatherData);
    this.setState({ city: "", country: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <Col xs sm md lg xl={6}>
            <Form.Control
              type="text"
              placeholder="Input city..."
              name="city"
              value={this.state.city}
              onChange={this.onChange}
              autoComplete="off"
            />
          </Col>
          <Col xs sm md lg xl={4}>
            <Form.Control
              type="text"
              placeholder="Input country..."
              name="country"
              value={this.state.country}
              onChange={this.onChange}
              autoComplete="off"
            />
          </Col>
          <Col xs sm md lg xl={2}>
            <Form.Control type="submit" value="Search" />
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default CitySearch;
