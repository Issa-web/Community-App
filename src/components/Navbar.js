import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility
  } from "semantic-ui-react";

function Navbar( props ) {
    return (


        <nav className="header">
            <img 
                className="header__logo"
                src="https://www.crossed-flag-pins.com/Friendship-Pins/Mali/Flag-Pins-Mali-USA.jpg"
                alt=""
            />
            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Welcome</span>
                    </div>
                </Link>

                {props.loggedIn ? (<button onClick={props.logOut}>
                <Link to="/" className="header__link" >
                    <div className="header__option">
                        <span className="header__optionLineThree">Logout</span>
                    </div>
                </Link></button>) 
                :
                (<Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineThree">LogIn </span>
                    </div>
                </Link>)}
            </div>
        </nav>
    
    )
}

export default Navbar
