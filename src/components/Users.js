import React, { Component } from 'react'
import User from "./User"

class Users extends Component {

    // state ={
    //     users:{}
    // }
    
    // componentDidMount(){
    //     fetch(UsersUrl)
    //     .then(resp => resp.json())
    //     .then(usersData => {
    //         this.setState({
    //             users: usersData
    //         })
    //     })
    // }


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