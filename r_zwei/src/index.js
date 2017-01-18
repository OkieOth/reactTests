import React from 'react';
import ReactDOM from 'react-dom';
/* used in earlier version because hot reload gives 404.
 * modification of webpack devel config solve the problem
 */
//import { Router, Route, Redirect } from 'react-router';
//import { createHashHistory } from 'history';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import App from './App';
import Link1 from './Link1';
import Link2 from './Link2';
import Link3 from './Link3';

import './index.css';

/*
 * in earlier version used ... solved in this 404 Problem
 */
//const history = createHashHistory();

const router = <Router history={browserHistory}>
        <Redirect from='/' to='/app' />
        <Route path='/app' component={App} />
        <Route path='/link1' component={Link1} />
        <Route path='/link2' component={Link2} />
        <Route path='/link3' component={Link3} />
    </Router>;

ReactDOM.render(
  router, 
  document.getElementById('root')
);
