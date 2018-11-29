import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import News from './news/News'

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
          return <div>Events</div>
        }} />
        <Route exact path="/todo" render={(props) => {
          return <div>To Do</div>
        }} />
        <Route exact path="/news" render={(props) => {
          return <News />
        }} />
      </Switch>
    )
  }
}

export default App;