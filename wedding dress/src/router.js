import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Show from './routes/Show/Show';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/show" exact component={Show} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
