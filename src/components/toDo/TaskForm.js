import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { checkPropTypes } from 'prop-types';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      valid: null
    }
    this.nameInput = React.createRef();

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  postTask = () => {
    let taskObj = {
      // TODO: user id from session storage
      userId: 1,
      status: 1,
      name: this.state.name,
      dueBy: this.state.dueBy
    }
    if (taskObj.name === null )
    this.props.createTask(taskObj)
    this.toggle()
  }

  render() {
    return (
      <div>
        <Button color="primary" className="m-4" onClick={this.toggle}>Add Task</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a New Task</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="taskname">Task Name</Label>
              <Input required ref={this.nameInput} onChange={this.handleFieldChange} type="text" name="taskName" id="name" placeholder="Task Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Complete By</Label>
              <Input required onChange={this.handleFieldChange} type="date" name="date" id="dueBy" placeholder="date placeholder" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"
              onClick={this.postTask}>
              Save</Button>{' '}
            <Button color="secondary" onClick={() => {
              this.toggle()
              this.refs.nameInput.checkValidity()
            }
            }>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
