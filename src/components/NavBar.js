import React, { Component } from 'react';
import '../styles/App.css';

import Routes from '../routes';


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
        <Routes />
      </div>
    );
  }
}

export default NavBar;