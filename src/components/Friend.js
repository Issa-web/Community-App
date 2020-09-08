import React, { Component } from 'react'

export default class Friend extends Component {
    render() {
    const { name, age, id} = this.props.friend
        return (
            <div>
            <tr>
            <td>{this.props.friend.username}</td>
            {/* <td>title</td>
            <td>category</td>
            <td>location</td> */}
            </tr>
            </div>
        )
    }
}
