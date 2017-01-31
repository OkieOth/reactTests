import React, {} from 'react';

export interface ISmartButtonPropsBase {
    captionBase: string;
    clickCount: number;
}

export interface ISmartButtonProps extends ISmartButtonPropsBase {
    clickFunc: () => void;
}

export const SmartButton = (props:ISmartButtonProps) => {
    return (
        <button onClick={props.clickFunc}>{props.captionBase}: {props.clickCount}</button>
    );
};