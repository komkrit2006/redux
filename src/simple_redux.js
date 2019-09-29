import React from 'react';
import { createStore } from 'redux'

const reducer = (state = {},action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      state = {...state,name: action.payload}
      break
    case 'CHANGE_SURNAME':
      state = {...state,surname: action.payload}
      break
    case 'CHANGE_AGE':
      state = {...state,age: action.payload}
      break
    default: 
      break
  }
  return state
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log('store change',store.getState())
})



const SimpleRedux = () => {

  store.dispatch({type: 'CHANGE_NAME',payload: 'komkrit'})
  store.dispatch({type: 'CHANGE_SURNAME',payload: 'jankhong'})
  store.dispatch({type: 'CHANGE_AGE', payload: 24})

  return (
    <h1>This is simple redux</h1>
  )
}


export default SimpleRedux



