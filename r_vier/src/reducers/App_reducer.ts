/**
 * Created by eiko on 20.01.17.
 */
import * as ActionTypes from "../actions/action_types"
import { createStore, combineReducers } from 'redux';

const initialState = {clickCount1:0, clickCount2: 0, clickCount3: 0};

const appReducer = (state: ActionTypes.IState = initialState, action : ActionTypes.IAction ): ActionTypes.IState => {
    switch (action.type) {
        case ActionTypes.CLICKED_1:
            state.clickCount1++;
            return state;
        case ActionTypes.CLICKED_2:
            state.clickCount2++;
            return state;
        case ActionTypes.CLICKED_3:
            state.clickCount3++;
            return state;
        default:
            return state;
    }
};

/*
export const store = createStore(combineReducers({
    app: appReducer
}));
*/
export const store = createStore(appReducer);
