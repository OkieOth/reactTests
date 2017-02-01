import React, {} from 'react';

export interface ISmartButtonPropsBase {
    clickCount: number;
}

export interface ISmartButtonProps extends ISmartButtonPropsBase {
    clickFunc: () => void;
}

export const SmartButton = (props:ISmartButtonProps,name:string) => {
    const smartClick = () => {
        props.clickFunc(props.name);
    };
    console.log("SmartButton-1: "+props.clickCount[props.name]);
    return (
        <button onClick={smartClick}>{props.name}: {props.clickCount[props.name]}</button>
    );
};
