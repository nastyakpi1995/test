import {all} from 'redux-saga/effects'
import userAsync from "./userSaga";
import profileAsync from "./profileSaga";

 function* rootSaga() {
    yield all([
        userAsync(),
        profileAsync()
    ])
}

export default rootSaga
