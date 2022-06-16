import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  };

  // React says we have to define render
  render() {
      if  (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>
      }

      if (!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>
      }

      return <div>Loading!</div>
  };
};

export default App;
