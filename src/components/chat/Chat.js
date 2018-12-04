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

    return this.getMessages()
    .then(() => this.setState({isLoaded: true}))
  }

  getMessages = () => {
    return API.getData("messages")
    .then(messages => this.setState({messages: messages}))
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
            <h1 className="text-center my-5">Chat with the Waddle!</h1>
          </Col>
        </Row>
        {/* Make sure data is loaded */}
        { this.state.isLoaded && this.state.messages.length > 0 && this.props.users.length > 0
        ? (
          <Row>
            <Col>
              <ChatMessages
                messages={this.state.messages}
                currentUser={this.props.currentUser}
                users={this.props.users}
                relationships={this.props.relationships}
                removeRelationship = {this.props.removeRelationship}
                addRelationship = {this.props.addRelationship}
                editMessage={this.editMessage} />
            </Col>
          </Row>
        ) : null
        }
          <ChatInput sendMessage={this.sendMessage} currentUser={this.props.currentUser} />

      </Container>
    )
  }
}

export default Chat;
