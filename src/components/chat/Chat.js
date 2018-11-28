import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ChatMessages from './ChatMessages'
import API from '../../modules/API/API'

class Chat extends Component {
  state = {
    messages: [],
    users: []
  }

  componentDidMount() {
    this.getUsers()
    this.getMessages()
  }

  getMessages() {
    return API.getData("messages")
    .then(messages => this.setState({messages: messages}))
  }

  getUsers() {
    return API.getData("users")
      .then(users => this.setState({users: users}))
  }


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-5">Chat with your Waddle!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ChatMessages messages={this.state.messages} currentUser={this.props.currentUser} users={this.state.users} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Chat;
