import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { lat: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  // react says we have to define render
  render() {
    const lat = this.state.lat;
    const err = this.state.errorMessage;

    // conditionally render (using ternary) based on results
    return (
      <>
        {lat && !err ? (
          <div>Latitude: {lat}</div>
        ) : err && !lat ? (
          <div>Error: {err}</div>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
