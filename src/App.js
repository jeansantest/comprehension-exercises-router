import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './StrictAccess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/strict-access">Strict Access</Link>
          </li>
        </ol>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About} />
          <Route
            path="/strict-access"
            render={(props) => (
              <StrictAccess
                {...props}
                user={{ username: 'joao', password: '1234' }}
              />
            )}
          />
          <Route
            path="/users/:id"
            render={(props) => (
              <Users {...props} greetingsMessage="Good Morning" />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
