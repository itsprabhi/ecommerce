import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import dataReducers from './reducers/dataReducers'
import uiReducers from './reducers/uiReducers'
import userReducers from './reducers/userReducers'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {}

const middleware = [thunk]

const persistConfig = {
    key:'root',
    storage,
    whitelist:['ui','data','user']
}



//combining all the reducers
const rootReducers = combineReducers({
    user: userReducers,
    data:dataReducers,
    ui: uiReducers
})


const store = createStore(
    persistReducer(persistConfig,rootReducers), 
    initialState, 
    compose(
        applyMiddleware(...middleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
);

export const persistor = persistStore(store)

export default store;