import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Events from "./events/Events"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => {
          return <div>Home</div>
        }} />
        <Route exact path="/chat" render={(props) => {
          return <div>Chat</div>
        }} />
        <Route exact path="/events" render={(props) => {
          return <Events {...props}/>
        }} />
        <Route exact path="/todo" render={(props) => {
          return <div>To Do</div>
        }} />
        <Route exact path="/news" render={(props) => {
          return <div>News</div>
        }} />
      </Switch>
    )
  }
}

export default App;