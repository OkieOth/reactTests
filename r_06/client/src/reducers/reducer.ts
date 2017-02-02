/**
 * Created by eiko on 24.01.17.
 */
import { combineReducers,createStore } from 'redux';
import { mainViewReducer } from '../container/MainView_Cont';

export const rootReducer = combineReducers({
    mainView:mainViewReducer
});

export const store = createStore(rootReducer);
