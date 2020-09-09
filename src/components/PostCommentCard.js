import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
export default class PostCommentCard extends Component {
    render() {
        // console.log(this.props.comment.content)
        // console.log(this.props.comment.user)
        return (
                
            <div>

            <Card.Group>
                            <Card>
                                
                                <Card.Content>
                                    <Card.Description>
                                    <h2> Comment</h2>
                                    <h3>{this.props.comment.content}</h3>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
            </Card.Group>
            </div>
        )
    }
}
                {/* <ul>
                    <li>
                    <Card>
                        
                        {this.props.comment.content}
                    </Card>
                    </li>
                </ul> */}