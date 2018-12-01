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

    let currentUserFollows = relationships.find(r => r.userId === currentUser && r.friendId === messageUser.id)

    let followOutput = currentUserFollows
    ? <>You follow this user <Button size="sm" color="danger" className="ml-2 text-white" onClick={() => this.props.removeRelationship(currentUserFollows.id)}>Unfollow</Button></>
    : <>You don't follow this user <Button size="sm" className="ml-2 text-white" color="success" onClick={() => this.props.addRelationship(messageUser.id)}>Follow</Button></>

    let followsCurrentUser = relationships.find(r => r.userId === messageUser.id && r.friendId === currentUser) ? `This user follows you` : `This user doesn't follow you`
    return (
      <React.Fragment>
        <span className="px-1 message__username popover-link" id={`popover-${this.props.message.id}`} onClick={this.togglePopover}>
          {this.props.messageUser.displayName}
        </span>
        <Popover placement="right" isOpen={this.state.popoverOpen} target={`popover-${this.props.message.id}`} toggle={this.togglePopover} className="shadow">
          <PopoverHeader className="bg-primary text-white">{this.props.messageUser.displayName}</PopoverHeader>
          <PopoverBody>
            <p className="mb-1">{followOutput}</p>
            <p className="mb-0">{followsCurrentUser}</p>
          </PopoverBody>
        </Popover>
      </React.Fragment>
    );
  }
}