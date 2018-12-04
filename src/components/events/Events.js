import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import API from "./../../modules/API/API"
import EventList from "./EventList"
import EventForm from "./EventForm"
import "./Events.css"
import userSession from "../../modules/User/UserSession"

let currentUser

export default class Events extends Component {
  state = {
    events: [],
    modal: false,
    name: "",
    date: "",
    location: "",
    buttonId: "",
    firstEventId: "",
    currentUser: ""


  }

  componentDidMount() {
    this.props.findFriends(userSession.getUser())
    .then(()=> {
      this.setCurrentUser()
    })
    .then(()=>{
        this.getEvents()
    })
  }

  setCurrentUser = () => {
    this.setState({currentUser: userSession.getUser()})
  }


  getEvents = () => {
    let queryString = ""
    this.props.friendsArray.forEach((friend)=>{
      queryString += `&userId=${friend.id}`
    })

    return API.getData(`events?_expand=user&userId=${userSession.getUser()}${queryString}&_sort=date&_order=asc`).then((allEvents) => {
      this.setState({
        events: allEvents
      })
    }).then(()=> {
       (this.state.events.length > 0)
        ? this.setState({
          firstEventId: this.state.events[0].id
        })
        : this.setState({
          firstEventId: ""
        })


    })
  }

  addAndListEvents = (entryObject) => {
    return API.saveData("events", entryObject).then(() => {
      this.getEvents()
    })
  }

  deleteAndListEvents = (id) => {
    return API.deleteData("events", id)
      .then(() => {
        this.getEvents()
      })
  }

  editAndListEvents = (entryObject, id) => {
    return API.editData("events", entryObject, id)
    .then(() => {
      API.getData("events").then(() => {
        this.getEvents()
      })
    })
  }
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  buildNewEvent = (e) => {
    const event = {
      name: this.state.name,
      location: this.state.location,
      date: this.state.date,
      userId: userSession.getUser()
    }
      if (this.state.buttonId === "addEvent") {
        this.addAndListEvents(event)
        this.getId(e).then(()=>{
          this.toggle(e)
        })

      } else {
        const id = this.state.buttonId
        this.editAndListEvents(event, id)
        this.getId(e).then(()=>{
          this.toggle(e)
        })
      }
  }

  toggle = (e) => {
      this.setState({
        modal: !this.state.modal,
      })
    }

  getId = (id) => {
    return new Promise((resolve, reject)=> {
      this.setState({
        buttonId: id
      }, ()=> resolve());
    })
  }

  editState = () => {
    return new Promise((resolve, reject)=> {
      this.setState({
        name: this.state.events.find(event => event.id === parseInt(this.state.buttonId)).name,
        location: this.state.events.find(event => event.id === parseInt(this.state.buttonId)).location,
        date: this.state.events.find(event => event.id === parseInt(this.state.buttonId)).date
      }, ()=> resolve());
      })
    }


  render() {
    return (
      <Container className="events">
        <h1 className="text-center mt-5">Egg-citing Events!</h1>
        <div className="text-light text-center mt-4" ><Button className="text-light" color="primary" id="addEvent" onClick={(e) => {
          this.getId("addEvent").then(() => this.toggle())
        }}>Add New Event</Button></div>
        <div className="text-center mt-5">
          <EventForm
          modal={this.state.modal}
          className={this.props.className}
          handleFieldChange={this.handleFieldChange}
          buildNewEvent={this.buildNewEvent}
          toggle={this.toggle}
          buttonId={this.state.buttonId}
          events={this.state.events}
          name={this.state.name}
          location={this.state.location}
          date={this.state.date}
          getId={this.getId} />
        </div>
        <div className="mt-5">
          <EventList
          events={this.state.events}
          deleteAndListEvents={this.deleteAndListEvents}
          className={this.props.className}
          handleFieldChange={this.handleFieldChange}
          buildNewEvent={this.buildNewEvent}
          toggle={this.toggle}
          editState={this.editState}
          getId={this.getId}
          firstEventId={this.state.firstEventId}
          friendsArray={this.props.friendsArray}
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
          />
        </div>

      </Container>
    );
  }



}
