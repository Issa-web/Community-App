import React, { Component } from 'react'
import "./CommunityMembers.css"
import { Card } from 'semantic-ui-react'
export default class CommunityMembers extends Component {
    render() {
        return (
            <div>
                <Card >
                   Username: {this.props.member.username}
                   id: {this.props.member.id}
                   <button onClick={(event) => this.props.addFriend(event, this.props.member)}>Add friend</button>
                   <button onClick={(event) => this.props.sendMessage(event, this.props.member)}>Send message</button>
                </Card>
                
            </div>
        )
    }
}
