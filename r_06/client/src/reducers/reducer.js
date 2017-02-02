"use strict";
/**
 * Created by eiko on 24.01.17.
 */
var redux_1 = require('redux');
var MainView_Cont_1 = require('../container/MainView_Cont');
exports.rootReducer = redux_1.combineReducers({
    mainView: MainView_Cont_1.mainViewReducer
});
exports.store = redux_1.createStore(exports.rootReducer);
