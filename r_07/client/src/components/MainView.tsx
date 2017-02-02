import React, {} from 'react';
import * as MyMap from "../container/MyMap_Cont";
import * as CapitalList from "../container/CapitalList_Cont";

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
            <div className="leftCont floatStuff">
                <CapitalList.capitalListCont/>
            </div>
            <div className="rightCont floatStuff">
                <MyMap.myMapCont/>
            </div>
        </div>
    );
}

