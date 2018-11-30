import React from 'react';
import { Row, Button, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';



export default class EventItem extends React.Component {

  render() {

    return (
      <React.Fragment>

        <ListGroupItem key={this.props.event.id} className={(this.props.firstEventId === this.props.event.id) ? "bg-danger text-light": ""}>
          <Row>
            <Col xs={2} className= "d-flex align-items-center">
              {<i className={(this.props.firstEventId === this.props.event.id) ? "icon-event rounded-circle firstItem text-dark" :"icon-event rounded-circle otherItems text-dark"}></i>}
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
              <Button color={(this.props.firstEventId === this.props.event.id) ? "fresca": "success"} className="mx-1"onClick={(e)=> {
                this.props.getId(e)
                .then(() => this.props.editState())
                .then(()=> this.props.toggle())
                }}><i className="icon-pencil" id={this.props.event.id}
              ></i></Button>
              <Button color={(this.props.firstEventId === this.props.event.id) ? "fresca": "success"} className="mx-1" onClick={() => this.props.deleteAndListEvents(this.props.event.id)}><i className="icon-trash" ></i></Button>
            </Col>
          </Row>
        </ListGroupItem>
      </React.Fragment>

    );
  }
}