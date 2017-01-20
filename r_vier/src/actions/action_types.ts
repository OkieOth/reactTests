/**
 * Created by eiko on 20.01.17.
 */

export interface IAction {
    type: string;
}

export interface IState {
    clickCount1: number;
    clickCount2: number;
    clickCount3: number;
}

export const CLICKED_1 = "ONE_CLICKED";
export const CLICKED_2 = "TWO_CLICKED";
export const CLICKED_3 = "THREE_CLICKED";

