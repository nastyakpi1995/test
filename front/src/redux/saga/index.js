import {all} from 'redux-saga/effects'
import usersAsync from "./userSaga";

 function* rootSaga() {
    yield all([
        usersAsync(),
    ])
}

export default rootSaga
