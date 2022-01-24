import {all, call, takeEvery, put} from "redux-saga/effects";

import {request} from "../../utils/apiCaller";

import {authTypes, errorLoginCreator, successLoginCreator} from "../reducers/authReducer";
import {authToken, savedUser} from "../../utils/constants";


function* loginRequestAsync ({body}) {

    try {
        const data = yield call(request, '/api/user/login', 'post', body)

        if (data.data.token) {
            localStorage.setItem(savedUser, JSON.stringify(data.data.user))
            localStorage.setItem(authToken, data.data.token)
        }

        yield put((successLoginCreator()))
    } catch (e) {
        yield put(errorLoginCreator())
    }
}
function* authAsync () {
    yield all([
        takeEvery(authTypes.LOGIN_TYPE, loginRequestAsync),
    ])
}
export default authAsync