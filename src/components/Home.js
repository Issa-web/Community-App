import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Home.css";
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1> Welcome where our beautiful community members meet up </h1>
                <Link to="/signup">
                     <h3>Don't have an account? </h3>
                     <h3>Please sign up </h3>
                </Link>
                <img/>
            </div>
        )
    }
}
