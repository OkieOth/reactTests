import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainView from './components/MainView';
import { Provider } from 'react-redux';
import * as MainViewCont from "./container/MainView_Cont"

ReactDOM.render(
    <Provider store={MainViewCont.store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
