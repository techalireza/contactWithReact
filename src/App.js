import React, { useState } from 'react';
import './App.css';
import Container from './component/container/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleContact from './views/SingleContact/SingleContact';
import { Provider } from 'react-redux';
import store from './redux/store'





function App() {
  
  return (

    <Provider store={store}>
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
    </Provider>
  );
}


export default App;
