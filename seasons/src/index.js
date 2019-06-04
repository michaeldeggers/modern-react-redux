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
  }

  // react says we have to define render
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.error(err)
    );

    const latitude = this.state.latitude;
    return <div style={{padding: `15px`}}>Latitude: {latitude}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
