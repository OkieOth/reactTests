import React, {} from 'react';
import {DumbButton} from "./DumbButton";
import * as SmartButton from "../container/SmartButton_Cont";

const style = require("../resources/css/App.css");
const logo = require("../resources/logo.svg");
const verlauf = require("../resources/pics/verlauf.png")


export interface IAppProps extends React.Props<any> {
    getCLICKED_1x: () => void;
    getCLICKED_2x: () => void;
    getCLICKED_3x: () => void;
    clickCount1: number;
    clickCount2: number;
    clickCount3: number;
}

function printValue(place: String, count: Number): Number {
    console.log("printValue: " + place + ", count=" + count);
    return count;
}

export const MainView = (props: IAppProps) => {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React r_acht :-D</h2>
            </div>
            <div className="btns">
                <button onClick={ props.getCLICKED_1x }>ONE</button>
                <button onClick={ props.getCLICKED_2x }>TWO</button>
                <button onClick={ props.getCLICKED_3x }>THREE</button>
                <DumbButton caption="Dumb brother of THREE" clickFunc={ props.getCLICKED_3x } clickCount={props.clickCount3}/>
                <DumbButton caption="Dumb brother of ONE" clickFunc={ props.getCLICKED_1x } clickCount={props.clickCount1}/>
                <SmartButton.smartButtonCont name="Smart-1"/>
                <SmartButton.smartButtonCont name="Smart-2"/>
            </div>
            <div>
                <div>
                    <p>
                        <span>Clicks on Button 1:</span>
                        <span>{ printValue("clickCount1", props.clickCount1) }</span>
                    </p>
                    <p>
                        <span>Clicks on Button 2:</span>
                        <span>{ printValue("clickCount2", props.clickCount2) }</span>
                    </p>
                    <p>
                        <span>Clicks on Button 3:</span>
                        <span>{ printValue("clickCount3", props.clickCount3) }</span>
                    </p>
                </div>
            </div>
            <div>
                <img src={verlauf}/>
            </div>
        </div>
    );
}

