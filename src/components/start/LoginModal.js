import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap'
import validate from '../../modules/User/Validate'
class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: ""
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFieldChange = e => {
    const stateToChange = {}
    stateToChange[e.target.id] = e.target.value
    this.setState(stateToChange)
  }

  submitLogin = (e) => {
    e.preventDefault()
    let obj = {
      email: this.state.email,
      password: this.state.password
    }
    //validate and submit
    validate.existingUser(obj)
    .then(() => this.props.checkSuccess())

    this.toggle()
  }

  render() {
    return (
      <div>
        <Button className="text-white m-3" color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login to Waddle 2.0</ModalHeader>
          <Form onSubmit={(e) => this.submitLogin(e)}>
          <ModalBody>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="email" placeholder="email address" onChange={this.handleFieldChange} required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="password" placeholder="password" required onChange={this.handleFieldChange} />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" >Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;