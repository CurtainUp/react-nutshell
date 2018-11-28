import React, { Component } from 'react';
import { Container, ListGroup, Row, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, InputGroup, InputGroupAddon, InputGroupText, Input, Badge } from 'reactstrap';
import './ToDo.css'

export default class ToDoList extends Component {


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {
                this.props.tasks.map((task) => {
                  return <ListGroupItem id={task.id} key={task.id}>
                    <Row>
                      <Col xs="auto">
                        <h4><Badge><i className="icon-list"></i></Badge></h4>
                      </Col>
                      <Col xs="3">
                        <ListGroupItemHeading>{task.name}</ListGroupItemHeading>
                        <ListGroupItemText>{task.dueBy}</ListGroupItemText>
                      </Col>
                      <Col xs="5">
                        <InputGroup size="sm">
                          <InputGroupAddon addonType="append">Completed</InputGroupAddon>
                          <Input onClick={()=> this.props.toggleStatus(task.status, task.id)} type="checkbox" />
                        </InputGroup>
                      </Col>
                      <Col xs="auto">
                        <Button className="m-1" color="primary"><i className="icon-pencil "></i></Button>
                        <Button className="m-1" onClick={() => this.props.deleteTask(task.id)} color="primary"><i className="icon-trash " ></i></Button>
                      </Col>
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