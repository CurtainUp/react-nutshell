
import React, { Component } from 'react'

export default class Friend extends Component {


  render() {
    return (
      <React.Fragment>
        {
          this.props.friendsArray.map(friend => {
            return <h1 key={friend.id}>{friend.displayName}</h1>
          })
        }
      </React.Fragment>

    )
  }
}