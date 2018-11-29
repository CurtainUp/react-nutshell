import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import moment from 'moment'

export default class NewsEditModal extends React.Component {
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

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <div className="text-center m-3">
        <Button onClick={() => {

          this.toggle()
        }}
          className="m-1" color="primary">
          <i className="icon-pencil"></i>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Article</ModalHeader>
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
              this.props.handleEdit(this.article.id)
              this.toggle()
            }}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}