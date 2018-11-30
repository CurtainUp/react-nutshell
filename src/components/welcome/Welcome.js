import React, { Component } from 'react'
import { Jumbotron, Button, Container, Col } from 'reactstrap'

export default class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="my-5">
          <Jumbotron fluid>
            <Container fluid>

              {/* TODO:update display name */}
              <h1 className="display-4 container">Welcome to Waddle, [Display Name]</h1>
              <Col xs="8">
              <p className="lead container">
                With Waddle you can save your favorite news articles, plan your next event, make a to do list, and say "hi!" to friends.
              </p>
              </Col>
              <hr className="my-2" />
              <p className="lead container">
                Pick a place to get started:
              </p>
              <p className="lead container">
                <Button size="lg" onClick={()=>this.props.history.push("/chat")}className="m-1" color="primary">Chat</Button>
                <Button size="lg" onClick={()=>this.props.history.push("/news")}className="m-1" color="primary">News</Button>
                <Button size="lg" onClick={()=>this.props.history.push("/todo")}className="m-1" color="primary">To Do</Button>
                <Button size="lg" onClick={()=>this.props.history.push("/events")}className="m-1" color="primary">Events</Button>
              </p>
            </Container>
          </Jumbotron>
        </Container>
      </React.Fragment>
    )
  }
}