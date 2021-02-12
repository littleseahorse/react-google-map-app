import React, { Component } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
// import * as userData from '../UsersData/data.json';
import MapStyles from '../mapStyles.js';

class Map extends Component {
  state = {
    clickedUser: null,
    users: [],
  };

  fetchData = async (url = '', data = {}) => {
    await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.log(error));
  };

  setClickedUser(user) {
    this.setState({
      clickedUser: user,
    });
  }

  escFunction(e) {
    if (e.keyCode === 27) {
      this.setState({
        clickedUser: null,
      });
    }
  }

  componentDidMount() {
    this.fetchData('https://jsonplaceholder.typicode.com/users');
    document.addEventListener('keydown', this.escFunction.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction.bind(this), false);
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={1}
        defaultCenter={{
          lat: 0,
          lng: 0,
        }}
        defaultOptions={{ styles: MapStyles }}
      >
        {this.state.users.map((user) => (
          <Marker
            key={user.id}
            position={{
              lat: parseFloat(user.address.geo.lat),
              lng: parseFloat(user.address.geo.lng),
            }}
            onClick={() => this.setClickedUser(user)}
            icon={{
              url: '/logo.svg',
              scaledSize: new window.google.maps.Size(45, 45),
            }}
          />
        ))}
        {this.state.clickedUser && (
          <InfoWindow
            position={{
              lat: parseFloat(this.state.clickedUser.address.geo.lat),
              lng: parseFloat(this.state.clickedUser.address.geo.lng),
            }}
            onCloseClick={() => {
              this.setClickedUser(null);
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h3>{this.state.clickedUser.company.name}</h3>
              <p>
                <i>Service:</i> {this.state.clickedUser.company.catchPhrase}
              </p>
              <p>
                <i>Phone:</i> {this.state.clickedUser.phone}
              </p>
              <p>
                <i>Webiste:</i>{' '}
                <a href={'https://' + this.state.clickedUser.website}>
                  {this.state.clickedUser.website}
                </a>
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
}

const MapModal = withScriptjs(withGoogleMap(Map));

export default MapModal;
