import React from "react";
import { combineReducers, createStore } from "redux";

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      state = { ...state, name: action.payload };
      break;
    case "CHANGE_SURNAME":
      state = { ...state, surname: action.payload };
      break;
    case "CHANGE_AGE":
      state = { ...state, age: action.payload };
      break;
    default:
      break;
  }
  return state;
};

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = [...state, { list: action.payload, complete: false }];
      break;
    case "COMPLETE":
      state = state.map(todo =>{
        if(todo.list === action.payload) return {list: action.payload,complete:!todo.complete}
        else return todo
      })
      break;
    default:
      break;
  }
  return state;
};

const reducer = combineReducers({
  user: UserReducer,
  todo: TodoReducer
});

const store = createStore(reducer);

store.subscribe(() => {
  console.log("store change", store.getState());
});

const CombineReducer = () => {
  store.dispatch({ type: "CHANGE_NAME", payload: "komkrit" });
  store.dispatch({ type: "CHANGE_SURNAME", payload: "jankhong" });
  store.dispatch({ type: "CHANGE_AGE", payload: 24 });
  store.dispatch({ type: "ADD_TODO", payload: "do my home work" });
  store.dispatch({ type: "ADD_TODO", payload: "add more todo" });
  store.dispatch({ type: "COMPLETE", payload: "do my home work" });
  store.dispatch({ type: "COMPLETE", payload: "add more todo" });

  return <h1>This is combine Reducer</h1>;
};

export default CombineReducer;
