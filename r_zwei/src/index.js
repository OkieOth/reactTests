import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router';
import { createHashHistory } from 'history';
//import { Router, Route,browserHistory} from 'react-router';
import App from './App';
import Link1 from './Link1';
import Link2 from './Link2';
import Link3 from './Link3';

import './index.css';

const history = createHashHistory();

const router = <Router history={history}>
        <Route path='/' component={App} />
        <Route path='/link1' component={Link1} />
        <Route path='/link2' component={Link2} />
        <Route path='/link3' component={Link3} />
    </Router>;

ReactDOM.render(
  router, 
  document.getElementById('root')
);
