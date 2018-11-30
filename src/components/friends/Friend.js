
import React, { Component } from 'react'
import UserCard from './UserCard'

export default class Friend extends Component {


  render() {
    return (
      <React.Fragment>
        <UserCard followersArray={this.props.followersArray} friendsArray={this.props.friendsArray}/>
      </React.Fragment>

    )
  }
}