import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import * as MainViewCont from "./container/MainView_Cont"

ReactDOM.render(
    <Provider store={Reducer.store}>
        <MainViewCont.mainViewCont/>
    </Provider>,
  document.getElementById('root')
);
