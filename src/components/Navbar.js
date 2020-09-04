import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="header">
            <img 
                className="header__logo"
                src="https://www.crossed-flag-pins.com/Friendship-Pins/Mali/Flag-Pins-Mali-USA.jpg"
                alt=""
            />
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Welcome</span>
                    </div>
                </Link>
                <Link to="/signup" className="header__link">
                    <div className="header__option">
                        {/* <span className="header__optionLineOne">Hello</span> */}
                        <span  className="header__optionLineTwo">SignUp</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineThree">LogIn</span>
                        {/* <span className="header__optionLineTwo">In</span> */}
                    </div>
                </Link>
    

            </div>

            {/* image */}
            {/* SignUp */}
            {/* LogIn */}
            {/* 2 Links */}
        </nav>
    )
}

export default Navbar
