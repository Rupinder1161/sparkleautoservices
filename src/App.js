import React from 'react';
import logo from './logo.svg';


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
import Pricing from './components/Pricing'
import Header from './components/Header'
import FeaturedPost from './components/FeaturedPost'
import Posts from './components/Posts'
import Promise from './components/Promise'
import Contactform from './components/Contactform'
import Wof from './components/Wof'
import Mainform from './components/Mainform';

function App() {

  return (
  <div className="App" >
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/create" exact component={FeaturedPost}/>      
          <Route path="/user" component={Pricing}/>     
          <Route path="/createee" component={Contactform} />
          <Route path="/recent" component={Wof} />
          <Route path="/approoved" component={FeaturedPost}/> 
          <Route path="/services" component={Contactform}/>
        </Switch>
        
      </div>
    </Router>
    <Mainform />
   </div>
  );
}

export default App;
