import React from 'react';
import { Row, Button, Col, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import userSession from "../../modules/User/UserSession"
import moment from 'moment'




export default class EventItem extends React.Component {



  render() {

    return (
      <React.Fragment>

        <ListGroupItem key={this.props.event.id} className={(this.props.firstEventId === this.props.event.id) ? "bg-danger text-light" : ""}>
          <Row>
            <Col xs={2} className="d-flex align-items-center">
              {<i className={(this.props.firstEventId === this.props.event.id) ? "icon-event rounded-circle firstItem text-dark" : "icon-event rounded-circle otherItems text-light"}></i>}
            </Col>

            <Col xs={7} >
              <ListGroupItemText >
                {moment(this.props.event.date).format('l')}
                {(this.props.event.userId !== this.props.currentUser)
                  ?
                    <span className="badge badge-primary ml-2">
                    {this.props.event.user.displayName}
                    </span>

                  : ""
                }

              </ListGroupItemText>
              {(this.props.event.userId !== this.props.currentUser)
                ? <ListGroupItemHeading><em>{this.props.event.name}</em></ListGroupItemHeading>
                : <ListGroupItemHeading >{this.props.event.name} </ListGroupItemHeading>
              }
              {(this.props.event.userId !== this.props.currentUser)
                ? <ListGroupItemText><em>{this.props.event.location}</em></ListGroupItemText>
                : <ListGroupItemText > {this.props.event.location} </ListGroupItemText>
              }

            </Col>
            { (this.props.event.userId === this.props.currentUser)
            ?<Col xs={3} className="d-flex align-items-center">
               <Button color={(this.props.firstEventId === this.props.event.id) ? "fresca" : "primary"} className="mx-1" onClick={(e) => {
                this.props.getId(this.props.event.id)
                  .then(() => this.props.editState())
                  .then(() => this.props.toggle())
              }}><i className="icon-pencil"
              ></i></Button>
              <Button color={(this.props.firstEventId === this.props.event.id) ? "fresca" : "primary"} className="mx-1" onClick={() => this.props.deleteAndListEvents(this.props.event.id)}><i className="icon-trash" ></i></Button>
            </Col>
            : ""
            }
          </Row>
        </ListGroupItem>
      </React.Fragment>

    );
  }
}