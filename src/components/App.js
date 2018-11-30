import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Events from "./events/Events"
import ToDo from './toDo/ToDo'
import Chat from './chat/Chat'
import News from './news/News'
import Welcome from './welcome/Welcome'

class App extends Component {

  state = {
    currentUser: 1
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
          return <Events {...props}/>
        }} />
        <Route exact path="/todo" render={(props) => {
          return <ToDo/>
        }} />
        <Route exact path="/news" render={(props) => {
          return <News />
        }} />
      </Switch>
    )
  }
}

export default App;