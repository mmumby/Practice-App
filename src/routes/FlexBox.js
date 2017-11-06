import React from 'react';
import { Link } from 'react-router-dom';
import FlexExamples from '../components/FlexExamples';

export default () => (
  <div>
  <Link to="/"><i className="fa fa-2x fa-home" aria-hidden="true"></i>Home</Link>
  <h1>Flexbox examples </h1>
  <FlexExamples />
  </div>

  );