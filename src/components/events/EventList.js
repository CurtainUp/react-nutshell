import React, { Component } from 'react';
import {ListGroup } from 'reactstrap';
import EventItem from "./EventItem"

export default class EventList extends Component {



  render() {
    return(
      <ListGroup>
      {
        this.props.events.map(event =>
          <EventItem key={event.id} event={event} toggle={this.props.toggle} deleteAndListEvents={this.props.deleteAndListEvents} editState={this.props.editState}  getId={this.props.getId} firstEventId={this.props.firstEventId} />
        )
      }
    </ListGroup>
    )

  }
}