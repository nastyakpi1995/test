import {all} from 'redux-saga/effects'
import getUsersAsync from "./userSaga";

 function* rootSaga() {
    yield all([
        getUsersAsync(),
    ])
}

export default rootSaga
