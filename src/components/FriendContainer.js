import React, { Component } from 'react'
import Friend from "./Friend"

export default class FriendContainer extends Component {
    render() {
        return (
            <div>
                {this.props.listOfFriends.map(friend => <Friend friend={friend} key={friend.id}/>)}
                {/* <div className="ui red inverted segment">
          <h4>My friends</h4>
        </div> */}
        {/* <div className="ui placeholder compact inverted segment">
        <table className="ui celled striped padded table">
          <tbody>
            <tr> */}
              {/* <th>
                <h3 className="ui center aligned header">Friend Name</h3>
              </th> */}
              {/* <th>
                <h3 className="ui center aligned header">Title</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Category</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Location</h3>
              </th> */}
            {/* </tr>
            {this.props.listOfFriends.map(friend => <Friend friend={friend} key={friend.id}/>)}
          </tbody>
        </table>
        </div> */}
            </div>
        )
    }
}


