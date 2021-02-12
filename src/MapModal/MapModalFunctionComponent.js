import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
// import * as usersData from '../UsersData/data.json';
import MapStyles from '../mapStyles.js';

const Map = () => {
  const [users, setUsers] = useState([]);
  const [clickedUser, setClickedUser] = useState(null);

  async function fetchData(url = '', data = {}) {
    await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/users');
  }, []);

  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 27) {
        setClickedUser(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={1}
      defaultCenter={{
        lat: 0,
        lng: 0,
      }}
      defaultOptions={{ styles: MapStyles }}
    >
      {users.map((user) => (
        <Marker
          key={user.id}
          position={{
            lat: parseFloat(user.address.geo.lat),
            lng: parseFloat(user.address.geo.lng),
          }}
          onClick={() => {
            setClickedUser(user);
          }}
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
};

const MapModal = withScriptjs(withGoogleMap(Map));

export default MapModal;
