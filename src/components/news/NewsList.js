import React from 'react'
import { Col, Row, ListGroup, ListGroupItem, Badge, Button, Container } from 'reactstrap'
import moment from 'moment'
import NewsEditModal from './NewsEditModal'

// Displays saved articles
export default class NewsList extends React.Component {

  render() {
    return (
      <Container>
      <ListGroup>
        {
          this.props.news.map((article) =>
            <ListGroupItem key={article.id}>
              <Row>
                <Col xs="1" className="d-flex align-items-center">
                  <Badge><i className="icon-book-open m-1"></i></Badge></Col>
                <Col mx="auto"><a style={{ fontSize: 20 }} href={article.url}>{article.title}</a>
                  <p>{moment(article.timestamp).format("MM-DD-YYYY")}</p>
                  <p>{article.summary}</p>
                </Col>
                <Col xs="3" className="d-flex align-items-center">
                  <NewsEditModal article={article} editArticle={this.props.editArticle} />
                  <Button onClick={() => this.props.handleDelete(article.id)} className="m-1 px-2 py-1" color="primary">
                    <i className="icon-trash"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          )
        }
      </ListGroup>
      <h1 className="text-center m-5">Your Friend's News!</h1>
      <ListGroup className="mt-10">
        {
          this.props.news.map((article) =>
            <ListGroupItem key={article.id}>
              <Row>
                <Col xs="1" className="d-flex align-items-center">
                  <Badge><i className="icon-book-open m-1"></i></Badge></Col>
                <Col mx="auto"><a style={{ fontSize: 20 }} href={article.url}>{article.title}</a>
                  <p>{moment(article.timestamp).format("MM-DD-YYYY")}</p>
                  <p>{article.summary}</p>
                </Col>
                <Col xs="3" className="d-flex align-items-center">
                  <NewsEditModal article={article} editArticle={this.props.editArticle} />
                  <Button onClick={() => this.props.handleDelete(article.id)} className="m-1 px-2 py-1" color="primary">
                    <i className="icon-trash"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          )
        }
      </ListGroup>
      </Container>
    )
  }
}