import React, { Component } from 'react'
import { ListGroupItem, Badge } from 'reactstrap'

class Message extends Component {

  render() {
    let message = this.props.message
    let align
    this.props.user === this.props.message.userId
    ? (align = "text-right")
    : (align = "text-left")

    return (
        <ListGroupItem className={align}>
          <p>{message.userId}</p>
          <Badge className="px-3 py-2" color="primary" pill>{message.text}</Badge>
        </ListGroupItem>
    )
  }
}

export default Message