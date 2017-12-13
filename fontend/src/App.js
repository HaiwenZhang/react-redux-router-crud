import React, { Component } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import GamesList from './GamesPage';
import GameFormPage from './GameFormPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <div className="ui three item menu">
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/games">Games</Link>
            <Link className="item" to="/games/new">Add new Game</Link>
          </div>

          <Route exact path="/games" component={GamesList} />
          <Route path="/games/new" component={GameFormPage} />
          <Route path="/game/:_id" component={GameFormPage} />          
        </div>
      </Router>
    );
  }
}

export default App;
