import React from 'react'
// import Nav from './components/NavBar';
import Home from '../components/home'
import { Router, Route, Switch } from "react-router-dom";
import history from '../config/history'


const  MainRouter = () => {
  return (
     <Router history={history}>
       <Switch>
         <Route path="/" exact component={Home} />
        </Switch>
    </Router>

  )
}

export default MainRouter;