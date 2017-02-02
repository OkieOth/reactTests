/**
 * Created by eiko on 24.01.17.
 */
import { combineReducers,createStore } from 'redux';
import { mainViewReducer } from '../container/MainView_Cont';
import {smartButtonReducer} from "../container/SmartButton_Cont";

export const rootReducer = combineReducers({
    mainView:mainViewReducer,
    smartButton:smartButtonReducer
});

export const store = createStore(rootReducer);
