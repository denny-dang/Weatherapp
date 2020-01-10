import React, { Component } from "react";
import "./App.css";
import CitySearch from "./Components/CitySearch";
import WeatherStack from "./Components/WeatherStack";
import { Container } from "react-bootstrap";

class App extends Component {
  state = {
    //each item will be a json with location data
    locationList: [],
    //list of unique locaiton ids
    locationIDs: []
  };

  render() {
    return (
      <Container fluid={"true"}>
        <CitySearch addLocation={this.addLocation} />
        <WeatherStack locationList={this.state.locationList} />
      </Container>
    );
  }
  //add new location row
  addLocation = (locationData) => {
    //will not add if location already tracked in app
    for (let i = 0; i < this.state.locationIDs.length; i++) {
      if (this.state.locationIDs[i] === locationData.sys.id) {
        return;
      }
    }
    const locationObject = {};
    //each location has unique id
    locationObject[locationData.sys.id] = locationData;
    this.setState({
      locationList: [...this.state.locationList, locationObject],
      locationIDs: [...this.state.locationIDs, locationData.sys.id]
    });
  };
}

export default App;
