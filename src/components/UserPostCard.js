import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

const urlPost = "http://localhost:3000/api/v1/posts/"
export default class PostCard extends Component {
    // let postId = this.props.postId
    // handleEdit = () => {
    //     console.log('I have been edited')
    // }
    
    // handleDelete = (postId) =>{
    //     fetch(`${urlPost}+${postId}`, {method:"DELETE"})
    //     console.log(postId)
    //     // console.log("I have been deleted")
    // }

    render() {
        let postId =this.props.postId
        return (
            <div>
                <Card>
                {this.props.description}
                <span><button onClick={() =>this.props.handleDelete(postId)}>delete this post</button> <button onClick={() =>this.props.handleEdit(postId)}>Edit this post</button></span>
                </Card>
            </div>
        )
    }
}
