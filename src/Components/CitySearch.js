import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

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
    country: "",
    error: ""
  };

  getWeather = async (city, country) => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${APIkey}`
    ).catch((error) => {
      return "Invalid";
    });
    const response = await api_call.json();
    return response;
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = async (event) => {
    // error if blank text searches
    event.preventDefault();
    var weatherData = "";
    let errorMsg = "";
    if (this.props.locationList.length === 4) {
      errorMsg =
        "You can only have 4 rows displayed at a time. Please delete a location.";
    }
    if (this.state.city === "" && this.state.country === "") {
      errorMsg = "Please enter a city and country.";
    } else if (this.state.city === "") {
      errorMsg = "Please enter a city.";
    } else if (this.state.country === "") {
      errorMsg = "Please enter a country.";
    }
    if (errorMsg === "") {
      weatherData = await this.getWeather(this.state.city, this.state.country);
      //error if city/country not found
      if (weatherData.message === "city not found") {
        errorMsg =
          "Invalid input. Either we do not have records of that location or your spelling may be incorrect.";
      } else {
        this.props.addLocation(weatherData);
      }
    }
    this.setState({ city: "", country: "", error: errorMsg });
  };

  handleError(message) {
    if (message === "") {
      return "noError";
    } else {
      return "yesError";
    }
  }
  // search bar is a form tag and three components: two texts and one submit button
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
              <Form.Control
                type="text"
                placeholder="Input city..."
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <Form.Control
                type="text"
                placeholder="Input country..."
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
              <Form.Control type="submit" value="Search" />
            </Col>
          </Form.Row>
        </Form>
        <Row id={this.handleError(this.state.error)}>{this.state.error}</Row>
      </Container>
    );
  }
}

export default CitySearch;
