import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routers() {
  return (
    <Switch>
      <MyRoute exact path="/" Component={Login} isClosed />
      <MyRoute path="*" Component={Page404} />
    </Switch>
  );
}
