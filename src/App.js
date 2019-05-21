import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact render={(props) => <Body {...props} filterBy={'topstories'}/>} />
          <Route path="/new" exact render={(props) => <Body {...props} filterBy={'newstories'}/>} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
