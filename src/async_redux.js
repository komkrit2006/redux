import React from "react";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from 'redux-thunk'
import axios from 'axios'

const UserReducer = (state = {},action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            state = {...state,name: action.payload}
            break
        case 'CHANGE_SURNAME':
            state = {...state,surname: action.payload}
            break
        default:
            break
    }
    return state
}

const FetchDataReducer = (state = {},action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            state = {...state,loading:true}
            break
        case 'SET_DATA':
            state = {...state,data: action.payload,loading: false}
            break
        case 'FETCH_ERROR':
            state = {...state,error: action.payload,loading: false}
            break
        default:
            break
    }
    return state
}

const reducer = combineReducers({
    user: UserReducer,
    data: FetchDataReducer
})

const checkAction = (store) => (next) => (action) => {
    console.log('middle have been called',action)
    next(action)
}

const middleware = applyMiddleware(thunk,checkAction)

const store = createStore(reducer,middleware)

store.subscribe(() => {
    console.log('store update',store.getState())
})
    
const AsyncRedux = () => {

    store.dispatch((dispatch) => {
        dispatch({type: 'CHANGE_NAME',payload: 'komkirt'})
        dispatch({type: 'CHANGE_SURNAME',payload: 'jankhong'})
    })

    store.dispatch((dispatch) => {
        dispatch({type: 'FETCH_DATA'})
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch({type: 'SET_DATA',payload: res.data})
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR',payload: err})
        })
    })

    return (
        <h1>This is asynchronous Redux</h1>
    )
}

export default AsyncRedux