import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.scss';
import Welcome from '../components/Welcome';
import NavBar from '../components/NavBar';

export default () => (
  <div>
    <NavBar />
    <Welcome />
   </div>
  );