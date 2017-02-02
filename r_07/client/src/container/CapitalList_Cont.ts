import * as ActionTypes from "../types/action_types";
import { connect } from 'react-redux';
import {CapitalList, ICapitalListProps} from "../components/CapitalList";
import {updateMap} from "../components/MyMap";


interface ICapitalList_State {
    aktName:string;
}

const CAPITAL_CLICKED="capClicked";


function createCapitalClick (clickedName:string,l:number[]) {
    // recenter Map
    updateMap(l);
    return {
        type: CAPITAL_CLICKED,
        name: clickedName
    }
}


class CapitalList_State implements ICapitalList_State {
    aktName: string;
    constructor(name:string) {
        this.aktName = name;
    }
}

const initialState: ICapitalList_State = new CapitalList_State("Berlin");

export function capitalListReducer (state: ICapitalList_State = initialState, action : ActionTypes.ICapitalClickAction ): ICapitalList_State {
    switch (action.type) {
        case CAPITAL_CLICKED:
            return new CapitalList_State(action.name);
        default:
            return state;
    }
}


function mapStateToProps(state) {
    console.log("CapitalList.mapStateToProps: "+state.capitals.aktName);
    return {
        aktName: state.capitals.aktName
    };
}

function mapDispatchToProps(dispatch) {
    console.log("CapitalList.mapDispatchToProps");
    return {
        clickFunc: (s:string,l:number[]) => {
            console.log("getClicked");
            dispatch(createCapitalClick(s,l));
        }
    };
}

export const capitalListCont = connect(mapStateToProps, mapDispatchToProps)(CapitalList);
