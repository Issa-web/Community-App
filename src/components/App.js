import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"
import LogIn from "./LogIn"
import SignUp from "./SignUp"
import Users from "./Users"
import Navbar from "./Navbar"
import Footer from "./Footer"
import configObj from "./configObj"
import Home from "./Home"
import UserHome from "./UserHome"


const UsersUrl = "http://localhost:3000/api/v1/users"
class App extends Component {

  state = {
    loggedIn: false,
    currentUser: {}
  }

  handleLogin = (event, user) => {
    console.log(user);
    event.preventDefault();
    const { username, password } = user;
    fetch('http://localhost:3000/api/v1/login', configObj("POST", true, {username, password}))
    .then((response) => response.json())
    .then((data) => {
      localStorage.token = data.token
      localStorage.userName = data.user.username
      localStorage.userID = data.user.id
      this.setState({ loggedIn: true });
      })
    .catch((error) => alert(error));
  };

  handleRegister = (event, newUser) => {
    event.preventDefault();
    const { username, password } = newUser;

    fetch(UsersUrl, configObj("POST", false, {user: { username, password }}))
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      localStorage.token = data.token
      // localStorage.userName = data.user.username
      // localStorage.userID = data.user.id
      this.setState({ loggedIn: true });
      })
    .catch((error) => alert(error));
   
  };
    

  render(){
    return (
      <Router>
      <div className="app">
        {/* <Navbar/> */}
        <Switch>
        
          <Route path="/signup" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/home"/> :
          <SignUp handleRegister={this.handleRegister} {...routeProps} />} >
          </Route>

          <Route path="/login" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/home"/> :
          <LogIn handleLogin={this.handleLogin} {...routeProps} />} >
          </Route>

          <Route exact path="/">
          <Navbar/>
          <Home />
          </Route>

          <Route path="/home" component={UserHome}>
            {/* <UserHome /> */}
          </Route>
          
        </Switch>
        <Footer/>
      </div>
      </Router>
    );

  }
}

export default App;
