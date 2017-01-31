import * as ActionTypes from "../types/action_types";
import { connect } from 'react-redux';
import { SmartButton,ISmartButtonPropsBase } from "../components/SmartButton"


const CLICKED = "ONE_CLICKED2";

interface ISmartButtonState {
    captionBase: string;
    clickCount: number;
}

class SmartButtonState implements ISmartButtonState {
    captionBase: string;
    clickCount: number;
    constructor (s:string,c:number) {
        this.captionBase = s;
        this.clickCount = c;
    }
}

const createClick = (): ActionTypes.IBaseAction => {
    return {
        type: CLICKED
    }
};

const initialState : ISmartButtonState = new SmartButtonState("hallo",0);

export function smartButtonReducer (state: ISmartButtonState = initialState, action : ActionTypes.IBaseAction ): ISmartButtonState {
    switch (action.type) {
        case CLICKED:
            console.log("smartButtonReducer-> clicked: clickCount="+state.clickCount);
            return new SmartButtonState(state.captionBase,state.clickCount + 1);
        default:
            console.log("smartButtonReducer-> default: "+state.captionBase);
            return state;
    }
}

function mapStateToProps(state):ISmartButtonPropsBase {
    console.log("smartButton->mapStateToProps");
    return {
        clickCount: state.smartButton.clickCount,
        captionBase: state.smartButton.captionBase
    };
}

function mapDispatchToProps(dispatch) {
    console.log("smartButton->mapDispatchToProps :)");
    return {
        clickFunc: () => {
            console.log("getClicked");
            dispatch(createClick());
        }
    };
}

export const smartButtonCont = connect(mapStateToProps, mapDispatchToProps)(SmartButton);



