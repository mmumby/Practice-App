import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.scss';
import Welcome from '../components/Welcome';

export default () => (
  <div>
      <Link to="/flex-box">FlexBox</Link>
      <Welcome />
   </div>
  );