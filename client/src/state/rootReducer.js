import { combineReducers } from "redux";

import cargosReducer from './reducers/cargosReducer'
import authReducer from './reducers/authReducer'

export default combineReducers({
    cargosReducer,
    authReducer
})