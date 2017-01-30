import React, {} from 'react';
import {MyMap} from "./MyMap";

const style = require("../resources/css/App.css");


export interface IAppProps extends React.Props<any> {
}

function printValue(place: String, count: Number): Number {
    console.log("printValue: " + place + ", count=" + count);
    return count;
}

export const MainView = (props: IAppProps) => {
    return (
        <div className="App">
            <div className="App-header">
                <h2>OpenLayers v3 Example</h2>
            </div>
            <MyMap/>
        </div>
    );
}

