import React, { Component } from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Col, Input } from 'reactstrap';

class RegisterModal extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Register a Waddle 2.0 Account</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup row>
              <Label for="displayName" sm={2}>Display Name</Label>
              <Col sm={10}>
                <Input type="text" name="displayName" id="displayName" placeholder="Display Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="email" placeholder="email address" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Password</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="password" placeholder="password" />
              </Col>
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;