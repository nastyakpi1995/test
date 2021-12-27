import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";

const reducer = combineReducers({
    auth: authReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))
window.store = store
export default store
