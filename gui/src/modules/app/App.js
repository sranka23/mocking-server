import React from 'react';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Home from '../components/home/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <h1>Mock Creation Service</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register-new-mock">Register a new mock</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/update-mock/:id">
              <div>update component</div>
            </Route>
            <Route path="/register-new-mock">
              <div>add component</div>
            </Route>
            <Route path="/delete-a-mock">
              <div>delete component</div>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <div>
            {/* <List>
              <ListItem>
                <Link href="/">
                      Hello
                </Link>
              </ListItem>
          </List> */}
          </div>
        </Container>
      </div>

    </Router>

  );
}

export default App;
