import React, { Component } from "react";
import WeatherRow from "./WeatherRow";

export class WeatherStack extends Component {
  render() {
    return this.props.locationList.map((place) => {
      const locationData = place[Object.keys(place)[0]];
      return <WeatherRow key={locationData.sys.id} location={locationData} />;
    });
  }
}

export default WeatherStack;
