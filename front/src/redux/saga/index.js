import {all} from 'redux-saga/effects'
import userAsync from "./userSaga";
import profileAsync from "./profileSaga";
import dashboardAsync from "./dashboardSaga";
import authAsync from "./authSaga";

 function* rootSaga() {
    yield all([
        authAsync(),
        userAsync(),
        profileAsync(),
        dashboardAsync(),
    ])
}

export default rootSaga
