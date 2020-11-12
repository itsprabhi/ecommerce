import plusReducer from './plusReducer'
import subtractReducer from './subtractReucer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    plus: plusReducer,
    subtract: subtractReducer
})

export default allReducers