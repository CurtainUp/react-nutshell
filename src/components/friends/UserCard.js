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
                  {
                    this.props.friendsArray.map(user => {
                      return (
                        <Col key={user.id} xs="3">
                          <Card className="m-2">
                            <CardImg top src="https://images.prod.meredith.com/product/bf6939dbafb59f9155a451b61943f9a1/1518689128659/l/emperor-penguin-chick-portrait-antarctica-framed-photographic-print-on-canvas-size-24-h-x-16-w-x-1-5-d" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>{user.displayName}</CardTitle>
                              <Button>Button</Button>
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
                            <CardImg top src="https://images.prod.meredith.com/product/bf6939dbafb59f9155a451b61943f9a1/1518689128659/l/emperor-penguin-chick-portrait-antarctica-framed-photographic-print-on-canvas-size-24-h-x-16-w-x-1-5-d" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>{user.displayName}</CardTitle>
                              <Button>Button</Button>
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

