import React, { Component } from 'react'
import "./CommunityMembers.css"
import { Button, Card } from 'semantic-ui-react'
export default class CommunityMembers extends Component {
    render() {
        return (
            <div>

                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Description>
                            <h3>{this.props.member.username}</h3>
                            </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                                <div className='ui three buttons'>
                                <span><Button basic color='blue' onClick={(event) =>this.props.addFriend(event, this.props.member)}>Add friend</Button> 
                                <Button basic color='yellow' onClick={(event) =>this.props.sendMessage(event, this.props.member)}>Send Message</Button></span>
                                {/* <Button>Yo</Button> */}
                                </div>
                            </Card.Content>
                    </Card>
                </Card.Group>
                
            </div>
        )
    }
}
// <Card >
//    Username: {this.props.member.username}
//    {/* id: {this.props.member.id} */}
//    <button onClick={(event) => this.props.addFriend(event, this.props.member)}>Add friend</button>
//    <button onClick={(event) => this.props.sendMessage(event, this.props.member)}>Send message</button>
// </Card>