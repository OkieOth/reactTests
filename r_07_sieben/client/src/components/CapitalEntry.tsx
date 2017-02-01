import React, {} from 'react';

interface ICapitalEntryProps extends React.Props<any> {
    name: string;
    clickFunc: () => void;
}

export const CapitalEntry = (props) => {
    const getStyle = (): string => {
        let r: string = "capitalEntry";
        if (props.capital.name===props.aktName)
            r = r+" active";
        return r;
    };

    const click = () => {
        console.log("I'm clicked: "+props.capital.name);
        props.clickFunc(props.capital.name,props.capital.location);
    };

    return (
        <li className={getStyle()} onClick={click}>{props.capital.name}</li>
    );
};