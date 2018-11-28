import React, { Component } from 'react'
import { Container, Row, Col, Badge } from 'reactstrap'
import ChatMessages from './ChatMessages'
import API from '../../modules/API/API'

class Chat extends Component {
  state = {
    messages: [],
    userId: 1
  }

  componentDidMount() {
    this.getMessages()
  }

  getMessages() {
    return API.getData("messages")
    .then(messages => this.setState({messages: messages}))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-5">Chat with your Waddle!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ChatMessages messages={this.state.messages} user={this.state.userId} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Chat;
