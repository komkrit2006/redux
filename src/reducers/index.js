import { combineReducers } from 'redux'
import UserReducer from './UserReducer'
import TodoReducer from './TodoReducer'

const reducer = combineReducers({
    user: UserReducer,
    Todo: TodoReducer
})

export default reducer