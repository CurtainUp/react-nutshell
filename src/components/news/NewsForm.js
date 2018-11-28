// This file is currently useless

import React from "react"
import API from './../../modules/API/API'

export default class NewsForm extends React.Component {

  state = {
    title: "",
    summary: "",
    url: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
  }

  createArticle = () => {
    // evt.preventDefault()
    console.log("Save Clicked")
    const article = {
      title: this.state.title,
      summary: this.state.summary,
      url: this.state.url
    }

    // Create the animal and redirect user to animal list
    API.saveData("news", article)
  }
}