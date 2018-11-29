import React, { Component } from 'react'
import { ListGroupItem, Button, Badge, Fade, Input, Form, InputGroup, InputGroupAddon } from 'reactstrap'
import moment from 'moment'
import './message.scss'

class Message extends Component {

  state = {
    editedMessage: this.props.message.text,
    isBeingEdited: false
  }

  getMessageUser = () => {
    let messageUser = this.props.users.find(user => user.id === this.props.message.userId)
    return messageUser.displayName
  }

  toggleEdit = () => {
    this.setState({
      isBeingEdited: !this.state.isBeingEdited
    })
  }

  handleFieldChange = e => {
    const newState = {}
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  saveEditedMessage = e => {
    e.preventDefault()
    if(this.state.editedMessage === this.props.message.text) {
      return this.toggleEdit()
    }

    if(e.target.id === "cancel") {
      this.setState({editedMessage: this.props.message.text})
      return this.toggleEdit()
    }

    let editedMsg = {
      text: this.state.editedMessage,
      isEdited: true
    }
    this.toggleEdit()
    this.props.editMessage(editedMsg, this.props.message.id)

  }

  render() {
    let message = this.props.message
    let isCurrentUser = this.props.currentUser === this.props.message.userId
    let groupClasses
    let msgClasses

    if(isCurrentUser) {
      groupClasses = "text-right current-user__msg"
      msgClasses = "bg-primary text-white"
    } else {
      groupClasses = "text-left"
      msgClasses = ""
    }

    return (
      <ListGroupItem className={groupClasses}>
        <Fade>
          <p className="message__info">
            <span className="px-1 message__username">{this.getMessageUser()}</span>
            <span className="px-1 message__time text-muted">{moment(message.timestamp).fromNow()}</span>
          </p>

          {/* If is being Edited, show input instead of message */}
          { this.state.isBeingEdited
            ? <Form onSubmit={(e) => this.saveEditedMessage(e)}>
                <InputGroup>
                  <Input id="editedMessage" onChange={e => this.handleFieldChange(e)} value={this.state.editedMessage} autoFocus />
                  <InputGroupAddon addonType="append">
                    <Button color="success" className="text-white" type="submit">Edit</Button>
                  </InputGroupAddon>
                  <InputGroupAddon addonType="append">
                    <Button id="cancel" className="text-white" onClick={(e) => this.saveEditedMessage(e)}>Cancel</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            : (<React.Fragment>
                { isCurrentUser
                  ? <span className="edit-btn btn btn-sm btn-success text-white mr-2" onClick={() => this.toggleEdit()}>Edit</span>
                  : null }
                <Badge className={`px-3 py-2 message__body ${msgClasses}`} pill>{message.text}</Badge>
              </React.Fragment>)
          }

          {
            message.isEdited && !this.state.isBeingEdited
            ? <div className="message__edited text-black-50 mb-0">Edited</div> : null
          }
        </Fade>
      </ListGroupItem>
    )
  }
}

export default Message