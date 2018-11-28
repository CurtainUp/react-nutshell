import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup } from 'reactstrap';
import API from "./../../modules/API/API"
import EventList from "./EventList"

export default class Events extends Component {
  state = {
    events: [],
    modal: false
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents = () => {
    return API.getData("events").then((allEvents) => {
      this.setState({
        events: allEvents
      })
    })
  }

  deleteAndListEvents = (id) => {
    API.deleteData("events", id)
      .then(() => {
        API.getData("events").then((allEvents) => {
          this.setState({
            events: allEvents
          })
        })
      })
  }

  editAndList = (entryObject, id) => {
    API.editData("events", entryObject, id)
    .then(() => {
      API.getData("events").then((allEvents) => {
        this.setState({
          events: allEvents
        })
      })
    })
  }




  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <h1 className="text-center mt-5">Egg-citing Events!</h1>
        <div className="text-center mt-5">
          <Button className="text-light" color="success" onClick={this.toggle}>Add New Event</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Add New Event</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="eventName">Event Name</Label>
                  <Input type="text" name="eventName" id="eventName" />
                </FormGroup>
                <FormGroup>
                  <Label for="eventLocation">Location</Label>
                  <Input type="text" name="eventLocation" id="eventLocation" />
                </FormGroup>
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input type="date" name="date" id="date" />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggle}>Save</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="mt-5">
          <EventList events={this.state.events}/>
        </div>

      </Container>
    );
  }



}
