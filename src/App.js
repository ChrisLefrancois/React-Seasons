import logo from './logo.svg';
import './App.css';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'

class App extends React.Component{

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // get our latitude with geolocation
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  };

  renderContent() {
    // if geolocation doesnt work we get an error message.
    if  (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    //  render our latitude and season with SeasonDisplay.js
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Loader message='please accept location request '/>
  }

  // React says we have to define render
  render() {
    return (
      <div className='border red'>
        {this.renderContent()}
      </div>
    );
  };
};

export default App;
