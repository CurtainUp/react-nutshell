import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ToDo from './toDo/ToDo'
import Chat from './chat/Chat'
import News from './news/News'
import Landing from './start/Landing'
import Welcome from './welcome/Welcome'

class App extends Component {

  state = {
    currentUser: 1,
    isAuthenticated: true
  }

  isAuthenticated = () => {
    if (sessionStorage.getItem("currentUser") !== null) {
      this.isAuthenticated = true
    } this.isAuthenticated = false
  }

  render() {
    return (
      <Switch>

        <Route exact path="/" render={(props) => {
          if (this.state.isAuthenticated) {
            return <Welcome {...props} />
          }
          return <Landing />
        }} />

        <Route exact path="/chat" render={(props) => {
          return <Chat currentUser={this.state.currentUser} />
        }} />
        <Route exact path="/events" render={(props) => {
          return <div>Events</div>
        }} />
        <Route exact path="/todo" render={(props) => {
          return <ToDo />
        }} />
        <Route exact path="/news" render={(props) => {
          return <News />
        }} />
      </Switch>
    )
  }
}

export default App;