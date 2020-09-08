import React, { Component } from 'react'
import User from "./User"

class Users extends Component {

    render(){
        return (
            <div>
                
                <h2>User Page</h2>
                {this.props.users.map(user => <User user = {user} key = {user.id}/>)}
            </div>
        )

    }
}

export default Users