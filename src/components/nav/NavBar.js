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

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">Waddle</NavbarBrand>
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
              <NavItem>
                <NavLink onClick={() => { alert("you logged out not really though") }}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}