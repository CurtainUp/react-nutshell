import React from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class UserPopover extends React.Component {
  state = {
    popoverOpen: false
  };


  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {

    let relationships = this.props.relationships
    let messageUser = this.props.messageUser
    let currentUser = this.props.currentUser

    let currentUserFollows = relationships.find(r => r.userId === currentUser && r.friendId === messageUser.id) ? `You follow this user` : `You don't follow this user`

    let followsCurrentUser = relationships.find(r => r.userId === messageUser.id && r.friendId === currentUser) ? `This user follows you` : `This user doesn't follow you`
    return (
      <React.Fragment>
        <span className="px-1 message__username popover-link" id={`popover-${this.props.message.id}`} onClick={this.togglePopover}>
          {this.props.messageUser.displayName}
        </span>
        <Popover placement="right" isOpen={this.state.popoverOpen} target={`popover-${this.props.message.id}`} toggle={this.togglePopover} className="shadow">
          <PopoverHeader className="bg-primary text-white">{this.props.messageUser.displayName}</PopoverHeader>
          <PopoverBody>
            <p className="mb-1">{currentUserFollows}</p>
            <p className="mb-0">{followsCurrentUser}</p>
          </PopoverBody>
        </Popover>
      </React.Fragment>
    );
  }
}