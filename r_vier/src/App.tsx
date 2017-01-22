import React, {} from 'react';
import { connect } from 'react-redux';

import {getCLICKED_1,getCLICKED_2, getCLICKED_3} from './actions/App_actions';
import {IState} from "./actions/action_types";

const style = require("./App.css");
const logo = require("./logo.svg");

interface IAppProps extends React.Props<any> {
    getCLICKED_1x: () => void;
    getCLICKED_2x: () => void;
    getCLICKED_3x: () => void;
}

function mapStateToProps(state: IState) {
    console.log("mapStateToProps: state"+state.clickCount1);
    return {
            clickCount1: state.clickCount1,
            clickCount2: state.clickCount2,
            clickCount3: state.clickCount3
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCLICKED_1x: () => {
                console.log("getClicked1");
                const action = getCLICKED_1();
                dispatch(action)
        },
        getCLICKED_2x: () => {
            console.log("getClicked2");
            const action = getCLICKED_2();
            dispatch(action)
        },
        getCLICKED_3x: () => {
            console.log("getClicked3");
            const action = getCLICKED_3();
            dispatch(action)
        }
    };
}


export class App extends React.Component<IAppProps, void> {
    printValue (place, count ) :number {
        console.log("printValue: "+place+", count="+count);
        return count;
    }
    render() {
        const { clickCount1,clickCount2,clickCount3,getCLICKED_1x,getCLICKED_2x,getCLICKED_3x } = this.props;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React r_vier :)</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);


