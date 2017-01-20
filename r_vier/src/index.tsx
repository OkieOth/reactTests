import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import * as AppReducer from "./reducers/App_reducer"

ReactDOM.render(
    <Provider store={AppReducer.store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
