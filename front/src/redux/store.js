import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import userReducer from "./reducers/userReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";
import dashboardReducer from "./reducers/dashboardReducer";

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    user: userReducer,
    dashboard: dashboardReducer
})

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
window.store = store
export default store
