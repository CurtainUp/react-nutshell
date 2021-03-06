import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'
import userSession from '../../modules/User/UserSession'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOutUser = () => {
    userSession.logOutUser()
    //this.props.history.push("/login")
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">🐧 Waddle 2</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/chat">Chat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/todo">To Do</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/news">News</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/friends">Friends</NavLink>
              </NavItem>
              { userSession.getUser()
                ? (<NavItem>
                    <NavLink tag={Link} onClick={() => { this.logOutUser() }} to="/login">Logout</NavLink>
                  </NavItem>)
                : null
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}