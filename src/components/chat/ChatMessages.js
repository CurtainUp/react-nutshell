import React, { Component } from 'react'
import { ListGroup } from 'reactstrap'

import Message from './Message'

class ChatMessages extends Component {
  //Create a react reference to be able to set scroll position of ListGroup
  messagesEnd = React.createRef()

  componentDidMount() {
    //Set scroll to bottom of message window when component mounts
    this.scrollToBottom()
  }

  componentDidUpdate() {
    //Set scroll to bottom of message window when component updates
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView(false, { behavior: "smooth"})
  }

  render() {


    return (
      <ListGroup className="messages-box border">
        {
          this.props.messages.map(message => {
            return <Message key={message.id}
              editMessage={this.props.editMessage}
              currentUser={this.props.currentUser}
              users={this.props.users}
              relationships={this.props.relationships}
              removeRelationship = {this.props.removeRelationship}
              addRelationship = {this.props.addRelationship}
              message={message} />
          })
        }
        <div ref={(el) => {this.messagesEnd = el}}></div>
      </ListGroup>
    )
  }
}

export default ChatMessages