import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import history from './services/history';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routers from './routes';

function App() {
  return (
    <HistoryRouter history={history}>
      <Header />
      <Routers />
      <GlobalStyles />;
    </HistoryRouter>
  );
}

export default App;
