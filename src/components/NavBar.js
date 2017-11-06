import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(){
    super()
    this.state ={
      isOpen: false
    };
  }

  handleButtonClick(){
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <div className="navbar">
        <i onClick={this.handleButtonClick.bind(this)} id="hamburger-nav" className="fa fa-3x fa-bars" aria-hidden="true"></i>
        <div>
          <ul className="nav-dropdown">
            <li>
              <NavLink exact activeClassName="active" to="/">
              <i className="fa fa-2x fa-home" aria-hidden="true"></i>Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/flex-box">
              FlexBox
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;