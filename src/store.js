import { applyMiddleware, createStore } from "redux";
import reducer from './reducers'

const checkUsers = (store) => (next) => (action) => {
    console.log('middle ware have been called',action)
    next(action)
}

const middleware = applyMiddleware(checkUsers)

const store = createStore(reducer,middleware)

store.subscribe(() => {
    console.log('store update',store.getState())
})

export default store

