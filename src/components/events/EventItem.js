import React from 'react';
import { Row, Button, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class EventItem extends React.Component {
  render() {
    return (

      <ListGroupItem key={this.props.event.id} active="">
        <Row>
          <Col xs={1}>
            <Button className="" color="danger"><i className="icon-event"></i></Button>
          </Col>
          <Col xs={9}>
            <ListGroupItemText>
              {this.props.event.date}
          </ListGroupItemText>
            <ListGroupItemHeading>{this.props.event.name}</ListGroupItemHeading>
            <ListGroupItemText>
            {this.props.event.location}
          </ListGroupItemText>
          </Col>
          <Col xs={2}>
            <Button color="danger"><i className="icon-pencil"></i></Button>
            <Button color="danger"><i className="icon-trash"></i></Button>
          </Col>
        </Row>
      </ListGroupItem>

    );
  }
}