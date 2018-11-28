import React, { Component } from 'react'
import { ListGroupItem, Badge } from 'reactstrap'
import moment from 'moment'
import './message.scss'

class Message extends Component {

  render() {
    let message = this.props.message
    let groupClasses
    let msgClasses
    if(this.props.user === this.props.message.userId) {
      groupClasses = "text-right"
      msgClasses = "bg-primary text-white"
    } else {
      groupClasses = "text-left"
      msgClasses = ""
    }

    return (
      <ListGroupItem className={groupClasses}>
        <p className="message__info">
          <span className="px-1 message__username">{message.userId}</span>
          <span className="px-1 message__time text-muted">{moment(message.timestamp).fromNow()}</span>
        </p>
        <Badge className={`px-3 py-2 message__body ${msgClasses}`} pill>{message.text}</Badge>
      </ListGroupItem>
    )
  }
}

export default Message