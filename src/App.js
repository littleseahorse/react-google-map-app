import React, { Component } from 'react';
import './App.css';
import MapModal from './MapModal/MapModalClassComponent.js';
// import MapModal from './MapModal/MapModalFunctionComponent.js';

const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

class App extends Component {
  render() {
    return (
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <MapModal
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
