import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // particular to js, not react
  constructor(props) {
    // super is specific to react, ref to parents constructor function
    super(props);
    this.state = {
      lat: null // generally default eventual numbers to null
    }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.error(err)
    );
  }

  // react says we have to define render
  render() {
    const lat = this.state.lat;
    return <div style={{padding: `15px`}}>Latitude: {lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
