import React from "react";
import ReactDOM from "react-dom";
import PersonForm from './PersonForm';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import { NavLink as RRNavLink } from 'react-router-dom';

class RentRoom extends React.Component {

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


  componentDidMount() {
     //this.props.history.push('/map');
  }

  render() {
    return (
      <Router>
          <div>
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">Rent Room London</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>

                  <NavItem>
                    <NavLink to="/personForm" activeClassName="active" onClick={this.toggle} tag={RRNavLink}>Person Form</NavLink>
                  </NavItem>

                </Nav>
              </Collapse>
            </Navbar>
            <Route exact path="/personForm" component={PersonForm} />
         </div>   
      </Router>
    );
  }
}

export default RentRoom;




