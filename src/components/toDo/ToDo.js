import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import api from './../../modules/API/API'
import ToDoList from './ToDoList'
import TaskForm from './TaskForm'

export default class ToDo extends Component {

  constructor() {
    super()
    this.state.formOpen = false
  }

  state = {
    tasks: []
  }

  componentDidMount() {
    this.getTasks()
  }

  getTasks = () => {
    let newState = {}
    api.getData(`tasks?userId=${this.props.currentUser}&_sort=dueBy&_order=asc`)
      .then(tasks => newState.tasks = tasks)
      .then(() => this.setState(newState))
  }

  createTask = (taskObj) => {
    let newState = {}
    api.saveData("tasks", taskObj)
      .then(() => api.getData(`tasks?userId=${this.props.currentUser}&_sort=dueBy&_order=asc`))
      .then(tasks => newState.tasks = tasks)
      .then(() => this.setState(newState))
  }


  deleteTask = (id) => {
    let newState = {}
    api.deleteData("tasks", id)
      .then(() => api.getData(`tasks?userId=${this.props.currentUser}&_sort=dueBy&_order=asc`))
      .then(tasks => newState.tasks = tasks)
      .then(() => this.setState(newState))
  }

  editTask = (id, taskObj) => {
    let newState = {}
    return api.editData("tasks", taskObj, id)
      .then(() => api.getData(`tasks?userId=${this.props.currentUser}&_sort=dueBy&_order=asc`))
      .then(tasks => newState.tasks = tasks)
      .then(() => this.setState(newState))
  }


  toggleStatus = (currentStatus, id) => {
    let newState = {}
    let completeObj = {}
    if (currentStatus === 1) {
      completeObj = {
        status: 2
      }
    } else if (currentStatus === 2) {
      completeObj = {
        status: 1
      }
    }
    api.editData("tasks", completeObj, id)
      .then(() => api.getData(`tasks?userId=${this.props.currentUser}&_sort=dueBy&_order=asc`))
      .then(tasks => newState.tasks = tasks)
      .then(() => this.setState(newState))
  }



  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="text-center m-4">My To Do List</h1>
            <TaskForm currentUser={this.props.currentUser} createTask={this.createTask} />
            <ToDoList
              deleteTask={this.deleteTask}
              tasks={this.state.tasks}
              toggleStatus={this.toggleStatus}
              editTask={this.editTask} />
          </Col>
        </Row>
      </Container>
    )
  }
}