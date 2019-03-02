import React, { Component } from 'react';
import './App.css';
import Header from '../HomeHeader/HomeHeader';
import Main from '../UserProfile/UserProfile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => {return (<><Header /> <Main/></>) }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
