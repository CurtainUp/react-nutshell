import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import api from '../modules/API/API'
import ToDo from './toDo/ToDo'
import Chat from './chat/Chat'
import News from './news/News'
import Welcome from './welcome/Welcome'
import Friends from './friends/Friend'

class App extends Component {

  state = {
    currentUser: 1,
    friendsArray: [],
    allUsers: [],
    relationships:[]
  }

  componentDidMount(){
    this.findFriends(this.state.currentUser)
  }

  getUsers = () => {
    let newState = {}
    return api.getData("users")
      .then(users => newState.allUsers = users)
      .then(() => this.setState(newState))
  }

  getRelationships = () => {
    let newState = {}
    return api.getData("relationships")
      .then(relationships => newState.relationships = relationships)
      .then(() => this.setState(newState))
  }

  findRelationships = (currentUserId) => {
    return this.getUsers().then(() => this.getRelationships())
      .then(() => {
        return this.state.relationships.filter((relationship) => relationship.userId === currentUserId)
      })
  }

  findFriends = (currentUserId) => {
    this.findRelationships(currentUserId)
      .then((rels) => {
        let  friendsArray = []
        rels.forEach((rel) => {
         friendsArray.push(this.state.allUsers.find(user => user.id === rel.friendId))
        })
        this.setState({friendsArray:friendsArray})
      })
  }


  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => {
          return <Welcome {...props}/>
        }} />
        <Route exact path="/chat" render={(props) => {
          return <Chat currentUser={this.state.currentUser} />
        }} />
        <Route exact path="/events" render={(props) => {
          return <div>Events</div>
        }} />
        <Route exact path="/todo" render={(props) => {
          return <ToDo/>
        }} />
        <Route exact path="/news" render={(props) => {
          return <News />
        }} />
        <Route exact path="/friends" render={(props) => {
          return <Friends friendsArray={this.state.friendsArray}/>
        }} />
      </Switch>
    )
  }
}

export default App;