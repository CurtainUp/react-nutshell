import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ChatMessages from './ChatMessages'
import API from '../../modules/API/API'
import ChatInput from './ChatInput';

class Chat extends Component {
  state = {
    messages: [],
    users: []
  }

  componentDidMount() {
    this.getUsers()
    this.getMessages()
  }

  getMessages = () => {
    return API.getData("messages")
    .then(messages => this.setState({messages: messages}))
  }

  getUsers = () => {
    return API.getData("users")
      .then(users => this.setState({users: users}))
  }

  sendMessage = (msgObj) => {
    return API.saveData("messages", msgObj)
    .then(() => this.getMessages())
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
        <ChatInput sendMessage={this.sendMessage} currentUser={this.props.currentUser} />
      </Container>
    )
  }
}

export default Chat;
