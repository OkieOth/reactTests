/**
 * Created by eiko on 23.01.17.
 */
export interface IBaseAction {
    type: string;
}

export interface ICapitalClickAction extends IBaseAction {
    name: string;
}

export interface IMapRecenterAction extends IBaseAction {
    center:number[];
}
