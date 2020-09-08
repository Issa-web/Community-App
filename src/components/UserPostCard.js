import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

const urlPost = "http://localhost:3000/api/v1/posts/"

export default class PostCard extends Component {
   
    render() {
        let postId =this.props.post.id
        return (
            <div>
                <Card>
                {this.props.post.description}
                <span><button onClick={() =>this.props.handleDelete(postId)}>delete this post</button> 
                <button onClick={() =>this.props.handleDisplayPostTobeEdited(this.props.post)}>Edit this post</button></span>
                </Card>
            </div>
        )
    }
}
