import React, {} from 'react';

export interface IDumbButtonProps {
    clickFunc: () => void;
    caption:string;
    clickCount:number;
}

export const DumbButton = (props:IDumbButtonProps) => {
    return (
        <button onClick={props.clickFunc}>{props.caption}: {props.clickCount}</button>
    );
};