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
// import UserHomeNavBar from"./UserHomeNavBar"
import App2 from './App2';


const UsersUrl = "http://localhost:3000/api/v1/users"
class App extends Component {

  state = {
    loggedIn: false,
    currentUser: {}
  }
  componentDidMount() {
    if(localStorage.token) {
      this.setState({
        loggedIn: true
      })
    }
  }

  handleLogin = (event, user) => {
    console.log(user);
    event.preventDefault();
    const { username, password } = user;
    fetch('http://localhost:3000/api/v1/login', configObj("POST", true, {username, password}))
    .then((response) => response.json())
    .then((data) => {
      localStorage.token = data.token
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
      //console.log(data.error)
      if(data.error)
        alert(data.error)
      else{
        localStorage.token = data.token
        localStorage.userID = data.user.id
        this.setState({ loggedIn: true });
      }
      })
    .catch((error) => alert(error));
  };
  
  logOut = (event) =>{
    event.preventDefault();
    localStorage.clear();
    this.setState({
      loggedIn: false
    },
    alert("Successul logout!"));
  };



  render(){
    return (
      <Router>
      <div className="app">
        <Navbar loggedIn={this.state.loggedIn} logOut={this.logOut}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/app2' component ={App2}/>
        
          <Route path="/signup" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/home"/> :
            <SignUp handleRegister={this.handleRegister} {...routeProps} />} />
          {/* </Route> */}

          <Route exact path="/login" render={(routeProps) => (this.state.loggedIn) ? <Redirect to="/home"/> :
            <LogIn handleLogin={this.handleLogin} {...routeProps} />} />

          <Route exact path='/home' render={(routeProps) => (this.state.loggedIn)
          ? <UserHome logOut={this.logOut} {...routeProps}/>
          : <Redirect to='/login' />}/>
              
          {/* </Route> */}

            {/* <Navbar/> */}
            {/* <Home />
          </Route> */}

            {/* <UserHome /> don't use it*/} 
          {/* </Route> */}
          
        </Switch>
        <Footer/>
      </div>
      </Router>
    );

  }
}

export default App;
