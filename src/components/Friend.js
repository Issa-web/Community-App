import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Friend extends Component {
    render() {
    const { name, age, id} = this.props.friend
        return (

            <div>

            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Description>
                        <h3>{this.props.friend.username}</h3>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>

            </div>



            // <div>
            // <tr>
            // <td>{this.props.friend.username}</td>
            // {/* <td>title</td>
            // <td>category</td>
            // <td>location</td> */}
            // </tr>
            // </div>
        )
    }
}

