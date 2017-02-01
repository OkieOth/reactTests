import * as ActionTypes from "../types/action_types";
import { connect } from 'react-redux';
import {MyMap} from "../components/MyMap";
import {IMapRecenterAction} from "../types/action_types";

interface IMap_State {
    center:number[];
}

class Map_State implements IMap_State {
    center: number[];
    constructor(center:number[]) {
        this.center = center;
    }
}

const RECENTER="recenter";

export function createCenterChanged (center:number[]): IMapRecenterAction {
    return {
        type: RECENTER,
        center: center
    }
}


const initialState: IMap_State = new Map_State([43.66135,-79.383087]);

export function mapReducer (state: IMap_State = initialState, action : ActionTypes.IMapRecenterAction ): IMap_State {
    switch (action.type) {
        case RECENTER:
            return new Map_State(action.center);
        default:
            return state;
    }
}

function mapStateToProps(state) {
    console.log("MyMap_Cont->mapStateToProps");
    return {
        center: state.map.center
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export const myMapCont = connect(mapStateToProps, mapDispatchToProps)(MyMap);

