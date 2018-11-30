import { Container, Row, Col, Button } from 'reactstrap';
import React, { Component } from 'react';
import api from '../../modules/API/API'

export default class Friend extends Component {

  getUsers = () => {
    let newState = {}
    api.getData("users")
      .then(users => newState.users = users)
      .then(() => this.setState(newState))
  }

  getRelationships = () => {
    let newState = {}
    api.getData("relationships")
      .then(relationships => newState.relationships = relationships)
      .then(() => this.setState(newState))
  }

  findFriends(userId) {
    this.getUsers().then(() => this.getRelationships())
      .then(() => {
       let friends = this.state.users.map(user =>
          this.state.relationships.find((relationship) => relationship.userId === user.id))
          return friends
      })
  }

  render() {
    return (
      <div>hello friends</div>
    )
  }
}