import React from 'react';
import { Row, Button, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import EventForm from "./EventForm"

export default class EventItem extends React.Component {

  render() {
    return (

      <ListGroupItem key={this.props.event.id}>
        <Row>
          <Col xs={2} className="d-flex align-items-center">
            {<i className="icon-event rounded-circle" color="danger"></i>}
          </Col>
          <Col xs={7} >
            <ListGroupItemText >
              {this.props.event.date}
            </ListGroupItemText>
            <ListGroupItemHeading >{this.props.event.name}
            </ListGroupItemHeading>
            <ListGroupItemText >
              {this.props.event.location}
            </ListGroupItemText>
          </Col>
          <Col xs={3} className="d-flex align-items-center">
            <Button color="danger" className="mx-1"><i className="icon-pencil" id={this.props.event.id}
            onClick={(e)=> {
              this.props.getId(e)
              .then(() => this.props.editState())
              .then(()=> this.props.toggle())
              }}></i></Button>
            <Button color="danger" className="mx-1"><i className="icon-trash" onClick={() => this.props.deleteAndListEvents(this.props.event.id)}></i></Button>
          </Col>
        </Row>
      </ListGroupItem>

    );
  }
}