import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import FlexBox from './FlexBox';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/flex-box" exact component={FlexBox} />
    </Switch>
  </BrowserRouter>
);