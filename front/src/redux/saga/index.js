import {all} from 'redux-saga/effects'
import userAsync from "./userSaga";
import profileAsync from "./profileSaga";
import dashboardAsync from "./dashboardSaga";

 function* rootSaga() {
    yield all([
        userAsync(),
        profileAsync(),
        dashboardAsync(),
    ])
}

export default rootSaga
