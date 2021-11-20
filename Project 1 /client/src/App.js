import React, {Fragment} from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//components
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";



function App() {
  
    return <Fragment>
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<SignUp/>}></Route>
          <Route path="/signin" element = {<SignIn/>}></Route>
          <Route path="/homepage/:username" element = {<HomePage/>}></Route>
          <Route path = "/profile/:username" element = {<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
      </div> 
    </Fragment>
}

export default App;
