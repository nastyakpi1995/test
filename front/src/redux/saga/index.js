import {all} from 'redux-saga/effects'
import userAsync from "./userSaga";

 function* rootSaga() {
    yield all([
        userAsync(),
    ])
}

export default rootSaga
