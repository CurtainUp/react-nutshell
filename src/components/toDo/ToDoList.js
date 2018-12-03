import React, { Component } from 'react';
import { NavLink, Nav, TabContent, TabPane, NavItem, Alert, Container, ListGroup, Row, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, InputGroup, InputGroupAddon, Input, Badge } from 'reactstrap';
import './ToDo.css'
import classnames from 'classnames'
import moment from 'moment'



export default class ToDoList extends Component {

  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      editKey: null,
      activeTab: '1'
    }
  }

  componentDidMount() {
    let today = new Date()
    this.setState({ today: moment(today).format('l') })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
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

      // TAB NAVIGATION

      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
              style={
                (this.state.activeTab === '1') ?
                {backgroundColor: 'rgb(0,105,155, .1)' }
                :
                null
              }
            >
              To Do
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
              style={
                (this.state.activeTab === '2') ?
                {backgroundColor: 'rgb(0,105,155, .1)' }
                :
                null
              }
              >
              Complete
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>

          {/* FIRST TAB */}

          <TabPane tabId="1">
            <Container className="my-5">
              <Row>
                <Col sm="12" md={{ size: 9, offset: 1 }}>
                  <ListGroup>
                    {
                      this.props.tasks.map((task) => {
                        if (task.status === 1) {
                          return (
                            <ListGroupItem id={task.id} key={task.id}>
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
                                      <Col xs="4">
                                        <ListGroupItemHeading>{task.name}</ListGroupItemHeading>
                                        <ListGroupItemText>{moment(task.dueBy).format('l')}</ListGroupItemText>
                                      </Col>

                                      <Col xs="3" className="d-flex auto align-items-center">
                                        <InputGroup size="sm">
                                          <InputGroupAddon addonType="append">Completed</InputGroupAddon>
                                          <Input onClick={() => this.props.toggleStatus(task.status, task.id)} type="checkbox" />
                                        </InputGroup>
                                      </Col>
                                      {
                                        moment(this.state.today) >= moment(task.dueBy) ?
                                          <Col xs="2" className="d-flex auto align-items-center">
                                            <Alert className="my-0" color="warning">
                                              Past Due!
                                            </Alert>
                                          </Col>
                                          :
                                          <Col xs="2">
                                          </Col>
                                      }
                                      <Col xs="auto" className="d-flex auto align-items-center">
                                        <Button className="m-1 px-2 py-1" color="primary" onClick={() => { this.editKey(task.id) }}>
                                          <i className="icon-pencil "></i></Button>
                                        <Button className="m-1 px-2 py-1" onClick={() => this.props.deleteTask(task.id)} color="primary"><i className="icon-trash " ></i></Button>
                                      </Col>
                                    </React.Fragment>
                                }
                              </Row>
                            </ListGroupItem>
                          )
                        }
                      })
                    }

                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </TabPane>


          {/* SECOND TAB */}

          <TabPane tabId="2">
            <Container className="my-5">
              <Row>
                <Col sm="12" md={{ size: 9, offset: 1 }}>
                  <ListGroup>
                    {
                      this.props.tasks.map((task) => {
                        if (task.status === 2) {
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
                                    <Col xs="4">
                                      <ListGroupItemHeading>{task.name}</ListGroupItemHeading>
                                      <ListGroupItemText>{moment(task.dueBy).format('l')}</ListGroupItemText>
                                    </Col>

                                    <Col xs="3" className="d-flex auto align-items-center">
                                      <InputGroup size="sm">
                                        <InputGroupAddon addonType="append">Completed</InputGroupAddon>
                                        <Input onClick={() => this.props.toggleStatus(task.status, task.id)} defaultChecked type="checkbox" />
                                      </InputGroup>
                                    </Col>

                                    <Col xs="2">
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
                        }
                      })
                    }
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </TabPane>
        </TabContent>

      </Container>
    )
  }
}