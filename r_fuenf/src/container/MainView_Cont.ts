/**
 * Created by eiko on 23.01.17.
 */
import * as ActionTypes from "../types/action_types";
import { connect } from 'react-redux';
import * as MainView from "../components/MainView"

const CLICKED_1 = "ONE_CLICKED";
const CLICKED_2 = "TWO_CLICKED";
const CLICKED_3 = "THREE_CLICKED";

interface IState {
        clickCount1: number;
        clickCount2: number;
        clickCount3: number;
}

class MainView_State implements IState {
    clickCount1: number;
    clickCount2: number;
    clickCount3: number;

    constructor(c1: number,c2: number,c3: number) {
        this.clickCount1 = c1;
        this.clickCount2 = c2;
        this.clickCount3 = c3;
    }
}

class MainView_Actions {
    static createClick_1(): ActionTypes.IBaseAction  {
        return {
            type: CLICKED_1
        }
    }

    static createClick_2(): ActionTypes.IBaseAction {
        return {
            type: CLICKED_2
        }
    }

    static createClick_3(): ActionTypes.IBaseAction {
        return {
            type: CLICKED_3
        }
    }
}


const initialState: IState =  new MainView_State(0,0,0);

export function mainViewReducer (state: IState = initialState, action : ActionTypes.IBaseAction ): IState {
    switch (action.type) {
        case CLICKED_1:
            console.log("reducer: clicked_1: clickCount="+state.clickCount1);
            return new MainView_State(state.clickCount1 + 1,state.clickCount2,state.clickCount3);
        case CLICKED_2:
            console.log("reducer: clicked_2: clickCount="+state.clickCount2);
            return new MainView_State(state.clickCount1,state.clickCount2+1,state.clickCount3);
        case CLICKED_3:
            console.log("reducer: clicked_3: clickCount="+state.clickCount3);
            return new MainView_State(state.clickCount1,state.clickCount2,state.clickCount3+1);
        default:
            console.log("reducer: default");
            return state;
    }
};


function mapStateToProps(state) {
    console.log("mapStateToProps: state"+state.mainView.clickCount1);
    return {
        clickCount1: state.mainView.clickCount1,
        clickCount2: state.mainView.clickCount2,
        clickCount3: state.mainView.clickCount3
    };
}

function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps :)");
    return {
        getCLICKED_1x: () => {
            console.log("getClicked1");
            dispatch(MainView_Actions.createClick_1());
        },
        getCLICKED_2x: () => {
            console.log("getClicked2");
            dispatch(MainView_Actions.createClick_2());
        },
        getCLICKED_3x: () => {
            console.log("getClicked3");
            dispatch(MainView_Actions.createClick_3());
        }
    };
}

export const mainViewCont = connect(mapStateToProps, mapDispatchToProps)(MainView.MainView);

