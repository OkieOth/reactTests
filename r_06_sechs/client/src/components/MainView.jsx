"use strict";
var react_1 = require('react');
var style = require("../resources/css/App.css");
var logo = require("../resources/logo.svg");
var verlauf = require("../resources/pics/verlauf.png");
function printValue(place, count) {
    console.log("printValue: " + place + ", count=" + count);
    return count;
}
exports.MainView = function (props) {
    return (<div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React r_sechs :)))</h2>
            </div>
            <div className="btns">
                <button onClick={props.getCLICKED_1x}>ONE</button>
                <button onClick={props.getCLICKED_2x}>TWO</button>
                <button onClick={props.getCLICKED_3x}>THREE</button>
            </div>
            <div>
                <div>
                    <p>
                        <span>Clicks on Button 1:</span>
                        <span>{printValue("clickCount1", props.clickCount1)}</span>
                    </p>
                    <p>
                        <span>Clicks on Button 2:</span>
                        <span>{printValue("clickCount2", props.clickCount2)}</span>
                    </p>
                    <p>
                        <span>Clicks on Button 3:</span>
                        <span>{printValue("clickCount3", props.clickCount3)}</span>
                    </p>
                </div>
            </div>
            <div>
                <img src={verlauf}/>
            </div>
        </div>);
};
