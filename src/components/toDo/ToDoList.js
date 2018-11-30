import React, { Component } from 'react';
import { Alert, Container, ListGroup, Row, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, InputGroup, InputGroupAddon, InputGroupText, Input, Badge } from 'reactstrap';
import './ToDo.css'

export default class ToDoList extends Component {

  constructor() {
    super()
    this.state = {
      editKey: null
    }
  }

  editKey(key) {
    this.setState({
      editKey: key
    })
  }

  handleKeyPress = (event, id) => {
    let taskObj = {
      name: this.state.name,
      dueBy: this.state.dueBy
    }
    if (event.key === "Enter") {
      if (taskObj.name === "") {
        this.setState({ editKey: null })
      } else {
        this.props.editTask(id, taskObj)
        this.setState({
          editKey: null
        })
      }
    }
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2}}>
            <ListGroup>
              {
                this.props.tasks.map((task) => {
                  return <ListGroupItem id={task.id} key={task.id}>
                    <Row>
                      <Col xs="auto" className="d-flex auto align-items-center">
                        <h4><Badge><i className="icon-list"></i></Badge></h4>
                      </Col>
                      {
                        this.state.editKey === task.id ?
                          <React.Fragment>
                            <Col xs="4" onKeyPress={(event) => { this.handleKeyPress(event, task.id) }}>
                              <input id="name" onChange={(evt) => this.handleFieldChange(evt)} autoFocus type="text" defaultValue={task.name}></input>
                              <input id="dueBy" onChange={(evt) => this.handleFieldChange(evt)} type="date" defaultValue={task.dueBy}></input>
                            </Col>

                            <Col xs="5">
                              <Alert color="secondary">
                                Press Enter to Save Changes.
                               </Alert>
                            </Col>
                            <Col xs="auto" className="d-flex auto align-items-center justify-content-end">
                              <Button className="m-1" onClick={() => this.props.deleteTask(task.id)} color="primary"><i className="icon-trash " ></i></Button>
                            </Col>
                          </React.Fragment>

                          :

                          <React.Fragment>
                            <Col xs="3">
                              <ListGroupItemHeading>{task.name}</ListGroupItemHeading>
                              <ListGroupItemText>{task.dueBy}</ListGroupItemText>
                            </Col>

                            <Col xs="5" className="d-flex auto align-items-center">
                              {
                                task.status === 1 ?
                                  <InputGroup size="sm">
                                    <InputGroupAddon addonType="append">Completed</InputGroupAddon>
                                    <Input onClick={() => this.props.toggleStatus(task.status, task.id)} type="checkbox" />
                                  </InputGroup>
                                  :
                                  <InputGroup size="sm">
                                    <InputGroupAddon addonType="append">Completed</InputGroupAddon>
                                    <Input onClick={() => this.props.toggleStatus(task.status, task.id)} defaultChecked type="checkbox" />
                                  </InputGroup>
                              }
                            </Col>
                            <Col xs="auto" className="d-flex auto align-items-center">
                              <Button className="m-1 px-2 py-1" color="primary" onClick={() => { this.editKey(task.id) }}>
                                <i className="icon-pencil "></i></Button>
                              <Button className="m-1 px-2 py-1" onClick={() => this.props.deleteTask(task.id)} color="primary"><i className="icon-trash " ></i></Button>
                            </Col>
                          </React.Fragment>
                      }
                    </Row>
                  </ListGroupItem>
                })
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}