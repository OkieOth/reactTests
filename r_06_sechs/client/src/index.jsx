"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Reducer = require('./reducers/reducer');
var react_redux_1 = require('react-redux');
var MainViewCont = require("./container/MainView_Cont");
ReactDOM.render(<react_redux_1.Provider store={Reducer.store}>
        <MainViewCont.mainViewCont />
    </react_redux_1.Provider>, document.getElementById('root'));
