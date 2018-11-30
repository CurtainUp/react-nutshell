import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ToDo from './toDo/ToDo'
import Chat from './chat/Chat'
import News from './news/News'
import LoginModal from './start/LoginModal'
import RegisterModal from './start/RegisterModal'
class App extends Component {

  state = {
    currentUser: 1
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={(props) => {
          return <div>
            <LoginModal buttonLabel="Login" />
            <RegisterModal buttonLabel="Register" />
          </div>
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
      </Switch>
    )
  }
}

export default App;