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

  // OnClick functionality to edit saved articles
  handleEdit = (id) => {
    // ADD TIMESTAMP
    let timeSaved = moment(new Date())
    // ADD USER ID ON CLICK - Currently hard coded, needs to be userSession.getUser()
    let userId = 2
    let articleInfo = {
      title: this.state.title,
      summary: this.state.summary,
      url: this.state.url,
      userId: userId,
      timestamp: timeSaved
    }
    console.log(articleInfo)
    this.props.editArticle(articleInfo, id)
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
                <Input onChange={this.handleFieldChange} type="text" name="title" id="title" defaultValue={this.props.article.title} />
              </FormGroup>
              <FormGroup>
                <Label for="articleURL">URL</Label>
                <Input onChange={this.handleFieldChange} type="text" name="url" id="url" defaultValue={this.props.article.url} />
              </FormGroup>
              <FormGroup>
                <Label for="articleSummary">Article Summary</Label>
                <Input onChange={this.handleFieldChange} type="textarea" name="text" id="summary" defaultValue={this.props.article.summary} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.handleEdit(this.props.article.id)
              this.toggle()
            }}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}