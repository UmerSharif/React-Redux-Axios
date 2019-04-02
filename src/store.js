import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {}

const middleWares = [thunk]

// add redux logger as middleware for better logging

const store = createStore(rootReducer, initialState, 
    compose(
    applyMiddleware(...middleWares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store