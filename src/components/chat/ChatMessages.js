import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'

import Message from './Message'

class ChatMessages extends Component {

  render() {
    return (
      <ListGroup>
        {
          this.props.messages.map(message => {
            return <Message key={message.id}
              currentUser={this.props.currentUser}
              users={this.props.users}
              message={message} />
          })
        }
      </ListGroup>
    )
  }
}

export default ChatMessages