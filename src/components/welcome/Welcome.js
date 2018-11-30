import React, { Component } from 'react'
import { Jumbotron, Button, Container, Col } from 'reactstrap'
import API from '../../modules/API/API'
import UserSession from '../../modules/User/UserSession'

export default class Welcome extends Component {
  state = {
    displayName: ""
  }

  getDisplayName = () => {
    let userId = UserSession.getUser()
    API.getData(`users?id=${userId}`)
      .then((user) => {
        return this.setState({displayName: user[0].displayName})
      })
  }

  componentDidMount() {
    this.getDisplayName()
  }

  render() {

    return (
      <React.Fragment>
        <Container className="my-5">
          <Jumbotron fluid>
            <Container fluid>

              {/* TODO:update display name */}
              <h1 className="display-4 container">Welcome to Waddle, {this.state.displayName}</h1>
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
                <Button size="lg" onClick={() => this.props.history.push("/chat")} className="m-1" color="primary">Chat</Button>
                <Button size="lg" onClick={() => this.props.history.push("/news")} className="m-1" color="primary">News</Button>
                <Button size="lg" onClick={() => this.props.history.push("/todo")} className="m-1" color="primary">To Do</Button>
                <Button size="lg" onClick={() => this.props.history.push("/events")} className="m-1" color="primary">Events</Button>
                <Button size="lg" onClick={() => this.props.history.push("/friends")} className="m-1" color="primary">Friends</Button>
              </p>
            </Container>
          </Jumbotron>
        </Container>
      </React.Fragment>
    )
  }
}