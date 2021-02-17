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
  render() {
    const {
      users,
      filteredUsers,
      isFiltered,
      clickedUser,
      setClickedUser,
    } = this.props;
    return (
      <GoogleMap
        defaultZoom={1}
        defaultCenter={{
          lat: 0,
          lng: 0,
        }}
        defaultOptions={{ styles: MapStyles }}
      >
        {!isFiltered &&
          users.map((user) => (
            <Marker
              key={user.id}
              position={{
                lat: parseFloat(user.address.geo.lat),
                lng: parseFloat(user.address.geo.lng),
              }}
              onClick={() => setClickedUser(user)}
              icon={{
                url: 'logo.svg',
                scaledSize: new window.google.maps.Size(45, 45),
              }}
            />
          ))}
        {isFiltered &&
          filteredUsers.map((user) => (
            <Marker
              key={user.id}
              position={{
                lat: parseFloat(user.address.geo.lat),
                lng: parseFloat(user.address.geo.lng),
              }}
              onClick={() => setClickedUser(user)}
              icon={{
                url: 'logo.svg',
                scaledSize: new window.google.maps.Size(45, 45),
              }}
            />
          ))}
        {clickedUser && (
          <InfoWindow
            position={{
              lat: parseFloat(clickedUser.address.geo.lat),
              lng: parseFloat(clickedUser.address.geo.lng),
            }}
            onCloseClick={() => {
              setClickedUser(null);
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <h3>{clickedUser.company.name}</h3>
              <p>
                <i>Service:</i> {clickedUser.company.catchPhrase}
              </p>
              <p>
                <i>Phone:</i> {clickedUser.phone}
              </p>
              <p>
                <i>Webiste:</i>{' '}
                <a href={'https://' + clickedUser.website}>
                  {clickedUser.website}
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
