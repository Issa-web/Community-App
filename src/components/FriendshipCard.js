import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import "./FriendshipCard.css"
export default class FriendshipCard extends Component {
    render() {
        return (
            <div>
               <Card>
                   {this.props.friend.username}
                </Card> 
            </div>
        )
    }
}
