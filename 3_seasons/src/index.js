import React from "react";
import ReactDom from "react-dom";
import SeasonalDisplay from "./SeasonalDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <h1>Error: {this.state.errorMessage}</h1>
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonalDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
