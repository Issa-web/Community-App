import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class AllPostsCard extends Component {
    
    render() {
        let postId = this.props.postId
        return (
            <div>
                <Card>
                    {this.props.post.description}<button onClick={() => this.props.showPostComment(postId)} >Show comments</button>
                    {/* {this.props.comment === 0 ? "This post has no comment" : this.props.comment} */}
                    
                </Card>
            </div>
        )
    }
}
