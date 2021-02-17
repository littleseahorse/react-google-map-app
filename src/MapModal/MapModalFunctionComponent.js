import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
// import * as usersData from '../UsersData/data.json';
import MapStyles from '../mapStyles.js';

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={1}
      defaultCenter={{
        lat: 0,
        lng: 0,
      }}
      defaultOptions={{ styles: MapStyles }}
    >
      {!props.isFiltered &&
        props.users.map((user) => (
          <Marker
            key={user.id}
            position={{
              lat: parseFloat(user.address.geo.lat),
              lng: parseFloat(user.address.geo.lng),
            }}
            onClick={() => {
              props.setClickedUser(user);
            }}
            icon={{
              url: 'logo.svg',
              scaledSize: new window.google.maps.Size(45, 45),
            }}
          />
        ))}
      {props.isFiltered &&
        props.filteredUsers.map((user) => (
          <Marker
            key={user.id}
            position={{
              lat: parseFloat(user.address.geo.lat),
              lng: parseFloat(user.address.geo.lng),
            }}
            onClick={() => {
              props.setClickedUser(user);
            }}
            icon={{
              url: 'logo.svg',
              scaledSize: new window.google.maps.Size(45, 45),
            }}
          />
        ))}
      {props.clickedUser && (
        <InfoWindow
          position={{
            lat: parseFloat(props.clickedUser.address.geo.lat),
            lng: parseFloat(props.clickedUser.address.geo.lng),
          }}
          onCloseClick={() => {
            props.setClickedUser(null);
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <h3>{props.clickedUser.company.name}</h3>
            <p>
              <i>Service:</i> {props.clickedUser.company.catchPhrase}
            </p>
            <p>
              <i>Phone:</i> {props.clickedUser.phone}
            </p>
            <p>
              <i>Webiste:</i>{' '}
              <a href={'https://' + props.clickedUser.website}>
                {props.clickedUser.website}
              </a>
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const MapModal = withScriptjs(withGoogleMap(Map));

export default MapModal;
