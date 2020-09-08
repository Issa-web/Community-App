import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
export default class PostCommentCard extends Component {
    render() {
        return (
                
            <div>
                <ul>
                    <li>
                    <Card>
                        
                        {this.props.content}
                    </Card>
                    </li>
                </ul>
            </div>
        )
    }
}
