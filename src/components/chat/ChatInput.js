import React, { Component } from 'react'
import { Form, InputGroup, InputGroupAddon, Button, Input, Row, Col } from 'reactstrap'
class ChatInput extends Component {
  state = {
    message: ""
  }

  handleFieldChange = (e) => {
    const newState = {}
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  prepareMessage = (e) => {
    e.preventDefault()
    if(!this.state.message) {
      return
    }

    let msgObj = {
      text: this.state.message,
      userId: this.props.currentUser,
      isEdited: false,
      timestamp: new Date()
    }

    this.props.sendMessage(msgObj)
    e.target.reset()
    this.setState({message: ""})
  }

  render() {
    return (
      <Row>
        <Col>
          <Form className="mb-3" onSubmit={(e) => this.prepareMessage(e) }>
            <InputGroup className="mt-5">
              <Input placeholder="Send a Message" id="message" onChange={(e) => this.handleFieldChange(e)} />
              <InputGroupAddon addonType="append">
                <Button color="success text-white">Send</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default ChatInput