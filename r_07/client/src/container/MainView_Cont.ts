/**
 * Created by eiko on 23.01.17.
 */

import * as ActionTypes from "../types/action_types";
import { connect } from 'react-redux';
import { MainView } from "../components/MainView"


interface IState {
}

class MainView_State implements IState {
}


const initialState: IState =  new MainView_State();

export function mainViewReducer (state: IState = initialState, action : ActionTypes.IBaseAction ): IState {
    switch (action.type) {
        default:
            console.log("reducer: default");
            return state;
    }
};


function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export const mainViewCont = connect(mapStateToProps, mapDispatchToProps)(MainView);

