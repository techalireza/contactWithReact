import React,{useState} from 'react';
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
  const [contact, setContact] = useState([
    { id:1 , name: "Alireza", family: "mousavi", phone: "+989121111111" },
    { id:12 , name: "mohammad", family: "mousavi", phone: "+989122222222" },
    { id:13 , name: "fateme sadat", family: "mousavi", phone: "+989123333333" },
    { id:14 , name: "hasan", family: "abdoly", phone: "+989124444444" },
    { id:15 , name: "mojtaba", family: "hasani", phone: "+989125555555" },
    { id:16 , name: "zahra", family: "alipour", phone: "+989126666666" },
]);
  return (

    <Router>
      <Switch>
        <Route path="/single-contact/:id">
          <SingleContact  contact={contact}/>
        </Route>
        <Route path='/'>
          <Container contact={contact} setContact={setContact}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
