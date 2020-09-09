import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'

const urlPost = "http://localhost:3000/api/v1/posts/"

export default class UserPostCard extends Component {
   
    render() {
        let postId =this.props.post.id
        return (
            <div>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Description>
                            <h3>{this.props.post.description}</h3>
                            </Card.Description>
                        </Card.Content>
                            <Card.Content extra>
                                <div className='ui three buttons'>
                                <span><Button basic color='red' onClick={() =>this.props.handleDelete(postId)}>delete this post</Button> 
                                <Button basic color='yellow' onClick={() =>this.props.handleDisplayPostTobeEdited(this.props.post)}>Edit this post</Button></span>
                                {/* <Button>Yo</Button> */}
                                </div>
                            </Card.Content>
                    </Card>
                </Card.Group>

            </div>
        )
    }
}

