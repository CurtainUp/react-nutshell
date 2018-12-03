import React, { Component } from 'react';
import api from '../modules/API/API'
import { Route, Switch, Redirect } from 'react-router-dom'
import Events from "./events/Events"
import ToDo from './toDo/ToDo'
import Chat from './chat/Chat'
import News from './news/News'
import Landing from './start/Landing'
import Welcome from './welcome/Welcome'
import Friends from './friends/Friend'
import userSession from './../modules/User/UserSession'
class App extends Component {

  state = {
    followersArray: [],
    friendsArray: [],
    allUsers: [],
    relationships: []
  }

  componentDidMount() {
    this.findFriends(userSession.getUser())
  }

  currentUserToState = (userId) => {
    this.setState({ currentUser: userId })
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
  removeRelationship = (id) => {
    return api.deleteData("relationships", id)
      .then(() => new Promise((resolve) => {
        this.setState({
          friendsArray: [],
          relationships: []
        }, () => resolve())
      }))
      .then(() => {
        return this.findFriends(userSession.getUser())
      })
  }

  addRelationship = (newFriendId) => {
    let currentUserId = userSession.getUser()
    let object = {
      userId: currentUserId,
      friendId: newFriendId
    }
    return api.saveData("relationships", object)
      .then(() => this.findFriends(currentUserId))
      .then(() => this.findFollowers(currentUserId))
  }

  findFriends = (currentUserId) => {
    return this.findRelationships(currentUserId)
      .then((rels) => {
        let friendsArray = []
        rels.forEach((rel) => {
          friendsArray.push(this.state.allUsers.find(user => user.id === rel.friendId))
        })
        this.setState({ friendsArray: friendsArray })
      })
  }

  findFollowers = (currentUserId) => {
    return api.getData(`relationships?friendId=${currentUserId}`)
      .then((followers) => followers.map((follower) => {
        return this.state.allUsers.find(user => user.id === follower.userId)
      })
      ).then((followers) => this.setState({followersArray: followers}))
  }

  isAuthenticated = () => sessionStorage.getItem("id") !== null

  render() {
    return (
      <Switch>

        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <Redirect to="/welcome" />
          }
          return <Redirect to="/login" />
        }} />

        <Route exact path="/welcome" render={props => {
          if (this.isAuthenticated()) {
            return <Welcome {...props} />
          }
          return <Redirect to="/login" />
        }} />

        <Route exact path="/login" render={props => {
          if (this.isAuthenticated()) {
            return <Redirect to="/welcome" />
          }
          return <Landing findFriends={this.findFriends} />
        }} />

        <Route exact path="/chat" render={(props) => {
          if (this.isAuthenticated()) {
            return <Chat currentUser={userSession.getUser()} />
          }
          return <Redirect to="/login" />
        }} />
        <Route exact path="/events" render={(props) => {
          if (this.isAuthenticated()) {
            return <Events {...props}
            findFriends={this.findFriends}
            friendsArray={this.state.friendsArray}
            />
          }
          return <Redirect to="/login" />
        }} />
        <Route exact path="/todo" render={(props) => {
          if (this.isAuthenticated()) {
            return <ToDo currentUser={userSession.getUser()} />
          }
          return <Redirect to="/login" />
        }} />
        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <News currentUser={userSession.getUser()} />
          }
          return <Redirect to="/login" />
        }} />
        <Route exact path="/friends" render={(props) => {
          if (this.isAuthenticated()) {
            return <Friends
              currentUserId={userSession.getUser()}
              friendsArray={this.state.friendsArray}
              followersArray={this.state.followersArray}
              relationships={this.state.relationships}
              findFriends={this.findFriends}
              findFollowers={this.findFollowers}
              addRelationship={this.addRelationship}
              removeRelationship={this.removeRelationship} />
          }
          return <Redirect to="/login" />
        }} />
      </Switch>
    )
  }
}

export default App;