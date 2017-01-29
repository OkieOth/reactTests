/**
 * Created by eiko on 23.01.17.
 */
"use strict";
var react_redux_1 = require('react-redux');
var MainView_1 = require("../components/MainView");
var CLICKED_1 = "ONE_CLICKED";
var CLICKED_2 = "TWO_CLICKED";
var CLICKED_3 = "THREE_CLICKED";
var MainView_State = (function () {
    function MainView_State(c1, c2, c3) {
        this.clickCount1 = c1;
        this.clickCount2 = c2;
        this.clickCount3 = c3;
    }
    return MainView_State;
}());
var createClick_1 = function () {
    return {
        type: CLICKED_1
    };
};
var createClick_2 = function () {
    return {
        type: CLICKED_2
    };
};
var createClick_3 = function () {
    return {
        type: CLICKED_3
    };
};
var initialState = new MainView_State(0, 0, 0);
function mainViewReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CLICKED_1:
            console.log("reducer: clicked_1: clickCount=" + state.clickCount1);
            return new MainView_State(state.clickCount1 + 1, state.clickCount2, state.clickCount3);
        case CLICKED_2:
            console.log("reducer: clicked_2: clickCount=" + state.clickCount2);
            return new MainView_State(state.clickCount1, state.clickCount2 + 1, state.clickCount3);
        case CLICKED_3:
            console.log("reducer: clicked_3: clickCount=" + state.clickCount3);
            return new MainView_State(state.clickCount1, state.clickCount2, state.clickCount3 + 1);
        default:
            console.log("reducer: default");
            return state;
    }
}
exports.mainViewReducer = mainViewReducer;
;
function mapStateToProps(state) {
    console.log("mapStateToProps: state" + state.mainView.clickCount1);
    return {
        clickCount1: state.mainView.clickCount1,
        clickCount2: state.mainView.clickCount2,
        clickCount3: state.mainView.clickCount3
    };
}
function mapDispatchToProps(dispatch) {
    console.log("mapDispatchToProps :)");
    return {
        getCLICKED_1x: function () {
            console.log("getClicked1");
            dispatch(createClick_1());
        },
        getCLICKED_2x: function () {
            console.log("getClicked2");
            dispatch(createClick_2());
        },
        getCLICKED_3x: function () {
            console.log("getClicked3");
            dispatch(createClick_3());
        }
    };
}
exports.mainViewCont = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MainView_1.MainView);
