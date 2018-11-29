import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import moment from 'moment'

export default class NewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAdd = () => {
    // ADD TIMESTAMP
    let timeSaved = moment(new Date())
    // ADD USER ID ON CLICK - Currently hard coded, needs to be userSession.getUser()
    let id = 2
    let articleInfo = {
      title: this.state.title,
      summary: this.state.summary,
      url: this.state.url,
      userId: id,
      timestamp: timeSaved
    }
    this.props.saveArticle(articleInfo)
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <div className="text-center m-3">
        <Button className="center" color="success" onClick={this.toggle}>Add Article</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Article</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="articleTitle">Title</Label>
                <Input onChange={this.handleFieldChange} type="text" name="title" id="title" placeholder="Title of article" />
              </FormGroup>
              <FormGroup>
                <Label for="articleURL">URL</Label>
                <Input onChange={this.handleFieldChange} type="text" name="url" id="url" placeholder="Link to article" />
              </FormGroup>
              <FormGroup>
                <Label for="articleSummary">Article Summary</Label>
                <Input onChange={this.handleFieldChange} type="textarea" name="text" id="summary" placeholder="A brief summary of the article" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.handleAdd()
              this.toggle()
            }}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}