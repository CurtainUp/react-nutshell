import React, { Component } from 'react'
import {
  Card, CardImg, CardBody, TabPane,
  CardTitle, Button, CardGroup, Container, Col, NavLink, NavItem, Nav, TabContent
} from 'reactstrap';
import classnames from 'classnames';

export default class UserCard extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {

    return (
      <React.Fragment>
        <Container className="my-3">
          <Nav className="m-2" tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Your Friends
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Following You
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Container className="my-2">
                <CardGroup>
                  { this.props.friendsArray.map(user => {

                      let relationshipId = this.props.relationships.find(relationship => relationship.userId === this.props.currentUserId && relationship.friendId === user.id).id

                      return (
                        <Col key={user.id} xs="3">
                          <Card className="m-2">
                            <CardImg top src={user.profilePic} alt="Card image cap" />
                            <CardBody>
                              <CardTitle>{user.displayName}</CardTitle>
                              {/* Unfollow your friends */}
                              <Button onClick={() => this.props.removeRelationship(relationshipId)}>Unfollow</Button>
                            </CardBody>
                          </Card>
                        </Col>
                      )
                    })
                  }
                </CardGroup>
              </Container>
            </TabPane>
            <TabPane tabId="2">
            <Container className="my-2">
                <CardGroup>
                  {
                    this.props.followersArray.map(user => {
                      return (
                        <Col key={user.id} xs="3">
                          <Card className="m-2">
                            <CardImg top src={user.profilePic} alt="Card image cap" />
                            <CardBody>
                              <CardTitle>{user.displayName}</CardTitle>
                              {/* If you don't follow this user, give option to follow */}
                              {
                                this.props.friendsArray.find(friend => friend.id === user.id)
                                ? <p>You follow them!</p>
                                : <Button onClick={() => this.props.addRelationship(user.id)}>Follow</Button>
                              }
                            </CardBody>
                          </Card>
                        </Col>
                      )
                    })
                  }
                </CardGroup>
              </Container>
            </TabPane>
          </TabContent>
        </Container >
      </React.Fragment>
    )
  }
}

