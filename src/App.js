import React from 'react';
import './App.css';
import Container from './component/container/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleContact from './views/SingleContact/SingleContact';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/single-contact/:id">
          <SingleContact />
        </Route>
        <Route path='/'>
          <Container />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
