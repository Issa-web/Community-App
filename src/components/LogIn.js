import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './LogIn.css'

class LogIn extends Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted")
        this.props.handleLogin(event, this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="login">
                <div className="login__container">
                    <h2>User log in</h2>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <label htmlFor='username'>Username</label>
                        <center>
                            <input 
                            name="username" 
                            type="text" 
                            placeholder='username...'
                            id='username'
                            onChange={(e) => this.handleChange(e)}/>
                        </center>
                        {/* <br></br> */}

                        <label htmlFor='password'>Password</label>
                        <center>
                            <input 
                            name="password" 
                            type="password" 
                            placeholder='password...'
                            id='password'
                            onChange={(e) => this.handleChange(e)}
                            />
                        </center>

                        <center>
                            <button type="submit" className="login__login">Login</button><br></br>
                            <Link to="/signup">
                                <button type="submit" className= "login__signup">Or Sign up</button><br></br>
                            </Link>
                            <Link to="/">
                                <button type="submit" className="login__homepage">Back to Home page</button>
                            </Link>
                        </center>
                    </form>

                </div>
            </div>
        )
    }
}

export default LogIn
