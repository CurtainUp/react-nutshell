import React from 'react'
import { Col, Row, ListGroup, ListGroupItem, Badge, Button } from 'reactstrap'
import moment from 'moment'
import NewsEditModal from './NewsEditModal'

// Displays saved articles
export default class NewsList extends React.Component {

  render() {
    return (
      <ListGroup>
        {
          this.props.news.map((article) =>
            <ListGroupItem key={article.id}>
              <Row>
                <Col xs="3" className="d-flex align-items-center">
                  <Badge><i className="icon-book-open "></i></Badge></Col>
                <Col mx="auto"><a style={{ fontSize: 20 }} href={article.url}>{article.title}</a>
                  <p>{moment(article.timestamp).format("MM-DD-YYYY")}</p>
                  <p>{article.summary}</p>
                </Col>
                <Col xs="3" className="d-flex align-items-center">
                  <NewsEditModal />
                  <Button onClick={() => this.props.handleDelete(article.id)} className="m-1" color="primary">
                    <i className="icon-trash"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          )
        }
      </ListGroup>
    )
  }
}