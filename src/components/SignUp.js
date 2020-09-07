import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./SignUp.css"

class SignUp extends Component {
    
    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("this is the user register form working")
        this.props.handleRegister(event, this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return (
            <div className="signup">
                <div className="signup__container">
                    <h2>New user signup</h2>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        if(this.state.username === "")//if empty, can also add more validation here
                            this.setState({usernameError: "Cannot be blank"})
                        else
                            this.setState({usernameError: ""})
                        if(this.state.password === "")
                            this.setState({passwordError: "Cannot be blank"})
                        else 
                            this.setState({passwordError: ""})

                        if(this.state.username !== "" && this.state.password !== "")
                            this.handleSubmit(event)                        
                        }}>
                        <label htmlFor='username'>Username</label>
                       <p>{this.state.usernameError}</p>
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
                        <p>{this.state.passwordError}</p>
                        <center>
                            <input 
                            name="password" 
                            type="password" 
                            placeholder='password...'
                            id='password'
                            onChange={(e) => this.handleChange(e)}
                            />
                        </center>
                        <button type="submit" className="signup__signup">Signup</button><br></br>
                        <Link to="/">
                            <button type="submit" className="signup__homepage">Home page</button>
                        </Link>
                    </form>


                </div>
            </div>
        )
    }
}

export default SignUp
