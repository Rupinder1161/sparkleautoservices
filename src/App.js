import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Caraousel from './components/Caraousel'
import Mainarea from './components/Mainarea'
import Middlearea from './components/Middlearea'
import Footer from './components/Footer'
import Navbar1 from './components/Navbar'


function App() {

  return (
  <div className="App" >
    <Router>
      <div>
      <Navbar1/> 
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create" exact component={Caraousel}/>
          
          <Route path="/users" component={Mainarea}/>
          
          <Route path="/" component={Middlearea} >
          </Route>
        </Switch>
      </div>
    </Router>
   {/* <Navbar1/>          
   <Caraousel/>
   <Mainarea/>
   <Middlearea/>
   <Footer/> */}
   </div>
  );
}

export default App;
