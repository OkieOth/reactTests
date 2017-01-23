import React, {} from 'react';

const style = require("../App.css");
const logo = require("../logo.svg");

interface IAppProps extends React.Props<any> {
    getCLICKED_1x: () => void;
    getCLICKED_2x: () => void;
    getCLICKED_3x: () => void;
}


export class MainView extends React.Component<IAppProps, void> {

    printValue (place: String, count: Number ):Number {
        console.log("printValue: "+place+", count="+count);
        return count;
    }

    render() {
        const { clickCount1,clickCount2,clickCount3,getCLICKED_1x,getCLICKED_2x,getCLICKED_3x } = this.props;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React r_fuenf :)</h2>
                </div>
                <div className="btns">
                    <button onClick={ getCLICKED_1x }>ONE</button>
                    <button onClick={ getCLICKED_2x }>TWO</button>
                    <button onClick={ getCLICKED_3x }>THREE</button>
                </div>
                <div>
                    <div>
                        <p>
                            <span>Clicks on Button 1:</span>
                            <span>{ this.printValue("clickCount1",clickCount1) }</span>
                        </p>
                        <p>
                            <span>Clicks on Button 2:</span>
                            <span>{ this.printValue("clickCount2",clickCount2) }</span>
                        </p>
                        <p>
                            <span>Clicks on Button 3:</span>
                            <span>{ this.printValue("clickCount3",clickCount3) }</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


