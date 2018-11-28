import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup } from 'reactstrap';
import API from "./../../modules/API/API"
import EventList from "./EventList"

export default class Events extends Component {
  state = {
    events: [],
    modal: false,
    name: "",
    date: "",
    location: ""
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

  addAndListEvents = (entryObject) => {
    return API.saveData("events", entryObject).then(() => {
      API.getData("events").then((allEvents) => {
        this.setState({
          events: allEvents
        })
      })
    })
  }

  deleteAndListEvents = (id) => {
    return API.deleteData("events", id)
      .then(() => {
        API.getData("events").then((allEvents) => {
          this.setState({
            events: allEvents
          })
        })
      })
  }

  editAndList = (entryObject, id) => {
    return API.editData("events", entryObject, id)
    .then(() => {
      API.getData("events").then((allEvents) => {
        this.setState({
          events: allEvents
        })
      })
    })
  }
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  buildNewEvent = () => {
    const event = {
      name: this.state.name,
      location: this.state.location,
      date: this.state.date
    }
    this.addAndListEvents(event).then(()=> {this.toggle()})
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
                  <Label for="name">Event Name</Label>
                  <Input type="text" name="eventName" id="name" onChange={this.handleFieldChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="location">Location</Label>
                  <Input type="text" name="location" id="location" onChange={this.handleFieldChange}/>
                </FormGroup>
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input type="date" name="date" id="date" onChange={this.handleFieldChange}/>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.buildNewEvent}>Save</Button>
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
