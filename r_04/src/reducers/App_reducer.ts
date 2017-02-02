/**
 * Created by eiko on 20.01.17.
 */
import * as ActionTypes from "../actions/action_types"
import { createStore, combineReducers } from 'redux';

const initialState = {clickCount1:0, clickCount2: 0, clickCount3: 0};

const appReducer = (state: ActionTypes.IState = initialState, action : ActionTypes.IAction ): ActionTypes.IState => {
    switch (action.type) {
        case ActionTypes.CLICKED_1:
            console.log("reducer: clicked_1: clickCount="+state.clickCount1);
            return { clickCount1: state.clickCount1 + 1,
                        clickCount2: state.clickCount2,
                        clickCount3: state.clickCount3
            };
        case ActionTypes.CLICKED_2:
            console.log("reducer: clicked_2: clickCount="+state.clickCount2);
            return { clickCount1: state.clickCount1,
                clickCount2: state.clickCount2 + 1,
                clickCount3: state.clickCount3
            };
        case ActionTypes.CLICKED_3:
            console.log("reducer: clicked_3: clickCount="+state.clickCount3);
            return { clickCount1: state.clickCount1,
                clickCount2: state.clickCount2,
                clickCount3: state.clickCount3 +1
            };
        default:
            console.log("reducer: default");
            return state;
    }
};

/* don't work this time :-/
export const store = createStore(combineReducers({
    App: appReducer
}));
*/

export const store = createStore(appReducer);
