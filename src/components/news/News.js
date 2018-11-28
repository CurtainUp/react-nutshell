import React from 'react'
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import NewsList from './NewsList'
import API from './../../modules/API/API'

export default class News extends React.Component {

  state = {
    news: []
  }

  newsLog = () => {
    let newState = {}

    API.getData("news")
      .then(news => newState.news = news)
      .then(() => this.setState(newState))
  }

  componentDidMount() {
    this.newsLog()
  }

  render() {
    return (
      <Container>
        <h1 className="text-center mt-5">News Around the 'Berg!</h1>
        <NewsModal />
        <NewsList news={this.state.news} />
      </Container>)
  }
}

class NewsModal extends React.Component {
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
                <Input type="text" name="title" id="articleTitle" placeholder="Title of article" />
              </FormGroup>
              <FormGroup>
                <Label for="articleURL">URL</Label>
                <Input type="text" name="url" id="articleURL" placeholder="Link to article" />
              </FormGroup>
              <FormGroup>
                <Label for="articleSummary">Article Summary</Label>
                <Input type="textarea" name="text" id="articleSummary" placeholder="A brief summary of the article" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}