import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import { Redirect } from 'react-router-dom'

export default class Landing extends Component {
  state = {
    loginSuccess: false
  }

  checkSuccess = (prop) => {
    this.setState({loginSuccess: true})
  }

  render() {
    if (this.state.loginSuccess === true) {
      return <Redirect to="/" />
    }
    return (
      <React.Fragment>
        <Jumbotron>
          <h1 className="display-3">Welcome to Waddle 2.0</h1>
          <hr className="my-2" />
          <Row>
            <LoginModal buttonLabel="Login" checkSuccess={this.checkSuccess} />
            <RegisterModal buttonLabel="Register" />
          </Row>
        </Jumbotron>
      </React.Fragment>
    )
  }
}