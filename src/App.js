import React, { Component } from 'react';
import './App.css';
// import MapModal from './MapModal/MapModalClassComponent.js';
import MapModal from './MapModal/MapModalFunctionComponent.js';
import UsersFilter from './UsersFilter/UsersFilterClassComponent.js';
// import UsersFilter from './UsersFilter/UsersFilterFunctionComponent.js';
import escapeRegExp from 'escape-string-regexp';

const API_KEY = process.env.REACT_APP_GOOGLE_KEY;

class App extends Component {
  state = {
    query: '',
    users: [],
    filteredUsers: [],
    isFiltered: false,
    clickedUser: null,
  };

  fetchData = async (url = '', data = []) => {
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

  updateQuery = (e) => {
    const value = e.target.value;
    this.setState({ query: value.trim() });
    this.toggleisFiltered();
  };

  componentDidUpdate() {
    let showingUsers;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingUsers = this.state.users.filter((user) =>
        match.test(user.company.name)
      );
      if (!this.state.isFiltered) {
        this.setState({
          filteredUsers: showingUsers,
          isFiltered: true,
        });
      }
    }
  }

  toggleisFiltered() {
    const delay = setTimeout(() => {
      this.setState((prevState) => ({ isFiltered: !prevState.isFiltered }));
    }, 750);
    return function CleanUpTimeout() {
      clearTimeout(delay);
    };
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction.bind(this), false);
  }

  render() {
    const { users, filteredUsers, isFiltered, clickedUser, query } = this.state;
    return (
      <div className="App" style={{ width: '100vw', height: '100vh' }}>
        <UsersFilter query={query} updateQuery={this.updateQuery.bind(this)} />
        <MapModal
          users={users}
          filteredUsers={filteredUsers}
          isFiltered={isFiltered}
          clickedUser={clickedUser}
          setClickedUser={this.setClickedUser.bind(this)}
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
