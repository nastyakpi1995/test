import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import userReducer from "./reducers/userReducer";

const reducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    user: userReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

window.store = store
export default store
