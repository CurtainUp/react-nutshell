import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ChatMessages from './ChatMessages'
import API from '../../modules/API/API'
import ChatInput from './ChatInput';

class Chat extends Component {
  state = {
    messages: [],
    users: [],
    relationships: [],
    isLoaded: false
  }

  componentDidMount() {

    //From App, pass down this.findFriends, this.findFollowers
    //call both to refresh the data

    return this.getUsers()
    .then(() => this.getRelationships())
    .then(() => this.getMessages())
    .then(() => this.setState({isLoaded: true}))
  }

  getMessages = () => {
    return API.getData("messages")
    .then(messages => this.setState({messages: messages}))
  }

  getUsers = () => {
    return API.getData("users")
      .then(users => this.setState({users: users}))
  }

  getRelationships = () => {
    return API.getData("relationships")
      .then(relationships => this.setState({relationships: relationships}))
  }

  sendMessage = (msgObj) => {
    return API.saveData("messages", msgObj)
    .then(() => this.getMessages())
  }

  editMessage = (editedMsg, msgId) => {
    return API.editData("messages", editedMsg, msgId)
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
        {/* Make sure data is loaded */}
        { this.state.isLoaded && this.state.messages.length > 0 && this.state.users.length > 0
        ? (
          <>
          <Row>
            <Col>
              <ChatMessages
                messages={this.state.messages}
                currentUser={this.props.currentUser}
                users={this.state.users}
                relationships={this.state.relationships}
                editMessage={this.editMessage} />
            </Col>
          </Row>
          <ChatInput sendMessage={this.sendMessage} currentUser={this.props.currentUser} />
          </>
        ) : null
        }
      </Container>
    )
  }
}

export default Chat;
