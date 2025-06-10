import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" Component={Login} />
      <Route path="*" Component={Page404} />
    </Routes>
  );
}
