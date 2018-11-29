import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

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
      userId: 1,
      status: 1,
      name: this.state.name,
      dueBy: this.state.dueBy
    }
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
              <Input valid onChange={this.handleFieldChange} type="text" name="taskName" id="name" placeholder="Task Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleDate">Complete By</Label>
              <Input valid onChange={this.handleFieldChange} type="date" name="date" id="dueBy" placeholder="date placeholder" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"
              onClick={this.postTask}>
              Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
