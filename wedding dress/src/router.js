import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Show from './routes/Show';
import Log from './routes/Log';
import Fenye1 from './routes/Fengge';
import Fenye2 from './routes/Gepian';
import Fenye3 from './routes/Taoxi';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Log} />
        <Route path="/0" exact component={Show} />
        <Route path="/1" exact component={Fenye1} />
        <Route path="/2" exact component={Fenye2} />
        <Route path="/3" exact component={Fenye3} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
