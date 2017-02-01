import * as ActionTypes from "../types/action_types";
import { connect } from 'react-redux';
import { SmartButton, ISmartButtonPropsBase } from "../components/SmartButton"
import {IBaseAction} from "../types/action_types";


const CLICKED = "ONE_CLICKED2";

interface ISmartButtonState {
    clickCount: { [key:string]:number; };
}

class SmartButtonState implements ISmartButtonState {
    clickCount: { [key:string]:number; };

    constructor (c:{ [key:string]:number; }) {
        this.clickCount = c;
    }
}

interface ISmartButtonAction extends IBaseAction {
    key: string;
}

const createClick = ( name:string ): ISmartButtonAction => {
    return {
        type: CLICKED,
        key: name
    }
};

const initialState : ISmartButtonState = new SmartButtonState({});

function cloneClickCount(clickCount:{ [key:string]:number; }) {
    return {
        "Smart-1": clickCount["Smart-1"],
        "Smart-2": clickCount["Smart-2"]
    };
}

export function smartButtonReducer (state: ISmartButtonState = initialState, action : ISmartButtonAction ): ISmartButtonState {
    switch (action.type) {
        case CLICKED:
            console.log("smartButtonReducer-> clicked: clickCount="+state.clickCount);
            let clickCount = state.clickCount;
            if (clickCount[action.key]) {
                clickCount[action.key] = clickCount[action.key]+1;
                console.log("smartButtonReducer-> clicked-1-1: clickCount="+clickCount[action.key]);
            }
            else {
                clickCount[action.key] = 1;
                console.log("smartButtonReducer-> clicked-1-2: clickCount="+clickCount[action.key]);
            }
            return new SmartButtonState(cloneClickCount(clickCount));
        default:
            return state;
    }
}

function mapStateToProps(state):ISmartButtonPropsBase {
    console.log("smartButton->mapStateToProps-1: "+state.smartButton.clickCount["state-1"]);
    console.log("smartButton->mapStateToProps-2: "+state.smartButton.clickCount["state-2"]);
    return {
        clickCount: state.smartButton.clickCount
    };
}

function mapDispatchToProps(dispatch) {
    console.log("smartButton->mapDispatchToProps :)");
    return {
        clickFunc: (name:string) => {
            console.log("getClicked");
            dispatch(createClick(name));
        }
    };
}

export const smartButtonCont = connect(mapStateToProps, mapDispatchToProps)(SmartButton);



