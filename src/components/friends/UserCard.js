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
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                All Users
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
                        <Col key={user.id} md="4" lg="3">
                          <Card className="mt-2">
                            <CardImg top src={user.profilePic} alt="Card image cap" />
                            <CardBody className="p-2">
                              <CardTitle>{user.displayName}</CardTitle>
                              {/* Unfollow your friends */}
                              <Button className="btn-sm mb-0 text-white" color="danger" onClick={() => this.props.removeRelationship(relationshipId)}>Unfollow</Button>
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
                        <Col key={user.id} md="4" lg="3">
                          <Card className="mt-2">
                            <CardImg top src={user.profilePic} alt="Card image cap" />
                            <CardBody className="p-2">
                              <CardTitle>{user.displayName}</CardTitle>
                              {/* If you don't follow this user, give option to follow */}
                              {
                                this.props.friendsArray.find(friend => friend.id === user.id)
                                ? <p>You follow them!</p>
                                : <Button className="btn-sm mb-0 text-white" color="success" onClick={() => this.props.addRelationship(user.id)}>Follow</Button>
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

            <TabPane tabId="3">
              <Container className="my-2">
                <CardGroup>
                  { this.props.allUsers.map(user => {

                      let isYou = user.id === this.props.currentUserId
                      // let relationshipId = this.props.relationships.find(relationship => relationship.userId === this.props.currentUserId && relationship.friendId === user.id).id
                      let isFriend = this.props.relationships.find(relationship => relationship.friendId === user.id && relationship.userId === this.props.currentUserId)
                      let isFollower = this.props.relationships.find(relationship => relationship.userId === user.id && relationship.friendId === this.props.currentUserId)
                      return (
                        <Col key={user.id} md="4" lg="3">
                          <Card className="mt-2">
                            <CardImg top src={user.profilePic} alt="Card image cap" />
                            <CardBody className="p-2">
                              <CardTitle>{user.displayName}</CardTitle>
                              { isYou
                                ? <p>This is you</p>
                                : null
                                }

                              { isFollower
                                ? <p className="mb-0">{`They follow you.`}</p>
                                : (!isYou
                                  ? <p>{`They don't follow you.`}</p>
                                  : null)
                                }

                              { isFriend
                                ? <p className="mb-0">You follow them. <br/><Button className="mt-3 btn-sm text-white" color="danger" onClick={() => this.props.removeRelationship(isFriend.id)}>Unfollow</Button></p>
                                : (!isYou
                                  ? <p className="mb-0">You don't follow them.<br/><Button className="mt-3 btn-sm text-white" color="success" onClick={() => this.props.addRelationship(user.id)}>Follow</Button></p>
                                  : null)
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

