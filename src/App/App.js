import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';
import UserProfile from '../UserProfile/UserProfile';
import LoginContainer from '../Login/LoginContainer';
import Link from '../UI/Link/Link';
import RegisterContainer from  '../Register/RegisterContainer';
import Logout from '../Logout/Logout';
import HomePage from '../HomePage/HomePage';
import About from '../UserProfile/About/About';
import AboutEdit from '../UserProfile/About/AboutEdit';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/profile-home/:userId/" render={route => { return (<><HomeHeader route={route} /> <UserProfile route={route} /></>) }} />
            <Route exact path="/logout" render={route => { return ( <Logout route={route} />) }} />
            <Route exact path="/register" render={route => { return (<RegisterContainer route={route} />) }} />
            <Route exact path="/" render={route => { return (<LoginContainer route={route} />) }} />
            <Route exact path="/home" render={route => { return (<HomePage route={route} />) }} />
            <Route exact path="/profile-home/account-details/" render={route => { return (<About route={route} />) }} />
            <Route exact path="/profile-home/account-details-Edit" render={route => { return (<AboutEdit route={route} />) }} />
            {/* NOT FOUND page */}
            <Route render={
              () => <><h1>404 Page not found!</h1><Link to="/" component={HomePage}>Home</Link></>
            } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
      users: state.users
  }
}

export default connect(mapStateToProps, null)(App);
// export default App;
