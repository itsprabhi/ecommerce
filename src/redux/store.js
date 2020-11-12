import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import dataReducers from './reducers/dataReducers'
import uiReducers from './reducers/uiReducers'
import userReducers from './reducers/userReducers'

const initialState = {}

const middleware = [thunk]


//combining all the reducers
const reducers = combineReducers({
    user: userReducers,
    data:dataReducers,
    ui: uiReducers
})

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
);

export default store;