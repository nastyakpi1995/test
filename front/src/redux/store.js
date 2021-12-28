import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

const reducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

window.store = store
export default store
