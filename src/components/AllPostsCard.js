import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PostCommentCard from "./PostCommentCard"
import "./AllPostsCard.css"
export default class AllPostsCard extends Component {
    state = {
        content:{}
    }
    render() {
        // console.log(this.props.post.comments)
        let postId = this.props.postId
        return (
            <div>
                <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Description>
                        <h2>{this.props.post.user.username} has posted :</h2>
                        ======================
                        <h3>{this.props.post.description}</h3>
                        </Card.Description>
                    </Card.Content>
                </Card>
                </Card.Group>
                {this.props.post.comments.length !== 0 ? 
                this.props.post.comments.map(comment => <PostCommentCard comment={comment}/>) : 'this post has not comment' }
            </div>
        )
    }
}

                // <Card>
                //     {/* {this.props.post.user.username}<h3> has posted:</h3> */}
                //     {this.props.post.description}<button onClick={() => this.props.showPostComment(postId)} >Show comments</button>
                //     {/* <button onClick={() => this.props.makeNewComment(postId)} >Make a comment</button> */}
                // </Card>
