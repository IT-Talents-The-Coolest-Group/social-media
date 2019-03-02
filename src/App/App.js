import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeHeader from '../HomeHeader/HomeHeader';
import UserProfile from '../UserProfile/UserProfile';
// import UserProfileHome from '../UserProfileHome/UserProfileHome';
import LoginContainer from '../Login/LoginContainer';
import Link from '../UI/Link/Link';
import RegisterContainer from  '../Register/RegisterContainer';
import PostCreator from '../PostCreator/PostCreator';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* <Route exact path="/profile" render={() => { return (<><HomeHeader /> <UserProfile /></>) }} /> */}
            <Route exact path="/profile-home" render={() => { return (<><HomeHeader /> <UserProfile/></>) }} />
            {/* <Route exact path="/post-creator" render={() => { return (<><HomeHeader /> <PostCreator /></>) }} /> */}
            <Route exact path="/register" render={() => { return (<RegisterContainer />) }} />
            <Route exact path="/" render={() => { return (<LoginContainer />) }} />

            {/* NOT FOUND page */}
            <Route render={
              () => <><h1>404 Page not found!</h1><Link to="/" comonent={PostCreator}>Home</Link></>
            } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
