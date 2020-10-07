import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ChitsPage } from './pages/ChitsPage';
import { CreatePage } from './pages/CreatePage';
import { ErrorPage } from './pages/ErrorPage';

export const useRoutes = () => (
  <Switch>
    <Route path="/create">
      <CreatePage />
    </Route>

    <Route path="/chits">
      <ChitsPage />
    </Route>

    <Route path="/" exact>
      <HomePage />
    </Route>

    <Redirect from="/home" to="/" />

    <Route path="/error">
      <ErrorPage message="The page is not available" />
    </Route>

    <Redirect from="/*" to="/error" />
  </Switch>
);
