import React, {} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {getCLICKED_1,getCLICKED_2, getCLICKED_3} from './actions/App_actions';

import {IState} from "./actions/action_types";

const style = require("./App.css");
const logo = require("./logo.svg");

interface IAppProps extends React.Props<any> {
    getCLICKED_1: () => void;
    getCLICKED_2: () => void;
    getCLICKED_3: () => void;
};

function mapStateToProps(state: IState) {
    return {
        clickCount1: state.clickCount1,
        clickCount2: state.clickCount2,
        clickCount3: state.clickCount3
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCLICKED_1: () => dispatch(getCLICKED_1()),
        getCLICKED_2: () => dispatch(getCLICKED_2()),
        getCLICKED_3: () => dispatch(getCLICKED_3())
    };
}


export class App extends React.Component<IAppProps, void> {
    render() {
        const { clickCount1,clickCount2,clickCount3,getCLICKED_1,getCLICKED_2,getCLICKED_3 } = this.props;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React r_vier</h2>
                </div>
                <div className="btns">
                    <button onClick={ getCLICKED_1 }>ONE</button>
                    <button onClick={ getCLICKED_2 }>TWO</button>
                    <button onClick={ getCLICKED_3 }>THREE</button>
                </div>
                <div>
                    <div>
                        <p>
                            <span>Clicks on Button 1:</span>
                            <span>{clickCount1}</span>
                        </p>
                        <p>
                            <span>Clicks on Button 2:</span>
                            <span>{clickCount2}</span>
                        </p>
                        <p>
                            <span>Clicks on Button 3:</span>
                            <span>{clickCount3}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


