import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const initialState = {}

const middleWares = [thunk]


const store = createStore(rootReducer, initialState, applyMiddleware(...middleWares))

export default store