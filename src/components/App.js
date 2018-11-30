import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Events from "./events/Events"
import ToDo from './toDo/ToDo'
import Chat from './chat/Chat'
import News from './news/News'
import Landing from './start/Landing'
import Welcome from './welcome/Welcome'

class App extends Component {

  state = {
    currentUser: 1,
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
          return <Landing />
        }} />

        <Route exact path="/chat" render={(props) => {
          if (this.isAuthenticated()) {
            return <Chat currentUser={this.state.currentUser} />
          }
          return <Redirect to="/login" />
        }} />
        <Route exact path="/events" render={(props) => {
          if (this.isAuthenticated()) {
            return <Events {...props}/>
          }
          return <Redirect to="/login" />
        }} />
        <Route exact path="/todo" render={(props) => {
          if (this.isAuthenticated()) {
            return <ToDo currentUser={this.state.currentUser} />
          }
          return <Redirect to="/login" />
        }} />
        <Route exact path="/news" render={(props) => {
          if (this.isAuthenticated()) {
            return <News currentUser={this.state.currentUser} />
          }
          return <Redirect to="/login" />
        }} />
      </Switch>
    )
  }
}

export default App;