/**
 * Created by eiko on 24.01.17.
 */
import { combineReducers,createStore } from 'redux';
import { mainViewReducer } from '../container/MainView_Cont';
import {capitalListReducer} from "../container/CapitalList_Cont";
import {mapReducer} from "../container/MyMap_Cont";

export const rootReducer = combineReducers({
    mainView:mainViewReducer,
    capitals:capitalListReducer,
    map:mapReducer
});

export const store = createStore(rootReducer);
