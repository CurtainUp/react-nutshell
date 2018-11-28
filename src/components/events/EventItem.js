import React from 'react';
import { Row, Button, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class EventItem extends React.Component {
  render() {
    return (

      <ListGroupItem key={this.props.event.id} active="">
        <Row>
          <Col xs={2}>
            <Button className="" color="danger"><i className="icon-event"></i></Button>
          </Col>
          <Col xs={7}>
            <ListGroupItemText >
              {this.props.event.date}
          </ListGroupItemText>
            <ListGroupItemHeading >{this.props.event.name}
            </ListGroupItemHeading>
            <ListGroupItemText >
            {this.props.event.location}
          </ListGroupItemText>
          </Col>
          <Col xs={3}>
            <Button color="danger" className="mx-1"><i className="icon-pencil"></i></Button>
            <Button color="danger"className="mx-1"><i className="icon-trash" onClick={() => this.props.deleteAndListEvents(this.props.event.id)}></i></Button>
          </Col>
        </Row>
      </ListGroupItem>

    );
  }
}