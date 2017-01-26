import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route,browserHistory} from 'react-router';
import App from './App';
import Link1 from './Link1';
import Link2 from './Link2';
import Link3 from './Link3';

 var routerMap = (
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/link1' component={Link1} />
        <Route path='/link2' component={Link2} />
        <Route path='/link3' component={Link3} />
    </Router>
);

export default routerMap;
