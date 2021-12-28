import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import editModalReducer from "./reducers/modalReducer";

const reducer = combineReducers({
    auth: authReducer,
    editModal: editModalReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

window.store = store
export default store
