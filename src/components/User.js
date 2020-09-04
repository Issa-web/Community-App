import React from 'react'

function User(props) {
    return (
        <div>
            <h1>User Profile</h1>
            <h2> Username: {props.user.username}</h2>
            <h2> User: {props.user.posts}</h2>
        </div>
    )
}

export default User
