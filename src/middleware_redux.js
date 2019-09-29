import React from "react";
import { applyMiddleware, createStore } from "redux";


const reducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            state = {...state,name: action.payload}
            break
        default:
            break
    }
    return state
};

const changeName = (store) => (next) => (action) => {
    console.log('middle ware have been called',action)
    switch(action.type) {
        case 'CHANGE_NAME':
            action.payload = 'komkrit'
            break
        default:
            break
    }
    next(action)
}

const middleware = applyMiddleware(changeName)

const store = createStore(reducer, '', middleware);

store.subscribe(() => {
  console.log("store change", store.getState());
});

const MiddlewareRedux = () => {

  store.dispatch({ type: "CHANGE_NAME", payload: "komkrit" });
  store.dispatch({ type: "CHANGE_NAME", payload: "warit" });
  store.dispatch({ type: "CHANGE_NAME", payload: "jantarika" });

  return <h1>This is Middleware Redux</h1>;
};

export default MiddlewareRedux;
