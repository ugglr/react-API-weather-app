import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "35a73ac3082a5af11e4e9bc2aa2a4e26";

class App extends React.Component {
  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `api.openweathermap.org/data/2.5/weather?
      q=London,
      uk&APPID=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
