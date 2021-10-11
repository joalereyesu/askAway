import React, {Fragment} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//components
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NavBar from "./components/Navbar";



function App() {
  
    return <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/sidebar">
            <NavBar />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
}

export default App;
