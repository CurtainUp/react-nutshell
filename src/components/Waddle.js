import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import App from "./App"

export default class Waddle extends Component {

  render() {
      return (
          <React.Fragment>
              <NavBar />
              <App />
          </React.Fragment>
      )
  }
}

