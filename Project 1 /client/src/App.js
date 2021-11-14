import React, {Fragment} from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//components
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";



function App() {
  
    return <Fragment>
      <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
      </div> 
    </Fragment>
}

export default App;
