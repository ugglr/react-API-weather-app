import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <p>This will show the temperature: </p>
        {this.props.city}
        {this.props.temperature}
      </div>
    );
  }
}

export default Weather;
