import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import PostCommentCard from "./PostCommentCard"
import "./AllPostsCard.css"
export default class AllPostsCard extends Component {
    state = {
        content:{}
    }
    render() {
        let postId = this.props.postId
        return (
            <div>
                <Card>
                    {this.props.post.description}<button onClick={() => this.props.showPostComment(postId)} >Show comments</button>
                    {/* <button onClick={() => this.props.makeNewComment(postId)} >Make a comment</button> */}
                </Card>
                {this.props.post.comments.length !== 0 ? 
                this.props.post.comments.map(comment => <PostCommentCard content={comment.content}/>) : 'this post has not comment' }

                {/* <form >
                        <textarea name="textarea"  value={this.state.content} 
                        onChange={(e) => this.setState({content: e.target.value})}> 
                        </textarea>  
                        <button>Submit</button>   
                        </form>  */}
            </div>
        )
    }
}
