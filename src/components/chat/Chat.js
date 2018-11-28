import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Chat extends Component {
  state = {  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-5">Chat with your Waddle!</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Chat;
