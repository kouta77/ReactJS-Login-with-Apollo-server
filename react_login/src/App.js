import React, {useState, useEffect} from "react";
import './App.css';
import Login from './routes/login'
import Register from './routes/register'
import Wellcome from './routes/wellcome'
import useToken from './components/useToken'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const { token, setToken} = useToken();

  useEffect(() => {
    console.log('Token Changed')
  }, [token])

  return (      
    <Router>
      <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Login Page</a>
          </div>
        </nav>

        {/* <div class="alert alert-danger" role="alert">
        Alert error: 
        </div> */}

        {
        !token?
        <Switch>
          <Route path="/login">
            <Login setToken={setToken}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login setToken={setToken}/>
          </Route>
        </Switch> 
        :
        <Switch>
          <Route path="/wellcome">
          <Wellcome />
          </Route>
          <Route path="/">
            <Wellcome />
          </Route>
        </Switch>
        }
      </div>
    </Router>
  );
}

export default App;
