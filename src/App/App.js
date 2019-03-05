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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/profile-home" render={() => { return (<><HomeHeader /> <UserProfile/></>) }} />
            <Route exact path="/logout" render={() => { return ( <Logout />) }} />
            <Route exact path="/register" render={() => { return (<RegisterContainer />) }} />
            <Route exact path="/" render={() => { return (<LoginContainer />) }} />
            <Route exact path="/home" render={() => { return (<HomePage/>) }} />
            <Route exact path="/profile-home/account-details" render={() => { return (<About/>) }} />

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

export default App;
