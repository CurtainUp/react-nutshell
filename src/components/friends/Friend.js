
import React, { Component } from 'react'
import UserCard from './UserCard'
import "./Friends.css"

export default class Friend extends Component {
  componentDidMount(){
    this.props.findFriends(this.props.currentUserId)
      .then(() => this.props.findFollowers(this.props.currentUserId))
  }


  render() {
    return (
      <React.Fragment>
        <UserCard
          followersArray={this.props.followersArray}
          friendsArray={this.props.friendsArray}
          currentUserId={this.props.currentUserId}
          relationships={this.props.relationships}
          addRelationship={this.props.addRelationship}
          removeRelationship={this.props.removeRelationship} />
      </React.Fragment>

    )
  }
}