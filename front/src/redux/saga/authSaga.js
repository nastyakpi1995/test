import {all, call, takeEvery, put} from "redux-saga/effects";

import {request} from "../../utils/apiCaller";

import {
    authTypes,
    errorLoginCreator,
    errorRegisterCreator,
    successLoginCreator,
    successRegisterCreator
} from "../reducers/authReducer";
import {authToken, savedUser} from "../../utils/constants";
import {setUserCreator} from "../reducers/userReducer";


function* registerRequestAsync ({body}) {
    try {
        const data = yield call(request, '/api/user/register', 'post', body)

        if (data.data.token) {
            localStorage.setItem(savedUser, JSON.stringify(data.data.user))
            localStorage.setItem(authToken, data.data.token)
        }

        yield put((successRegisterCreator()))
    } catch (e) {
        yield put(errorRegisterCreator())
    }
}

function* loginRequestAsync ({body}) {

    try {
        const data = yield call(request, '/api/user/login', 'post', body)

        if (data.data.token) {
            localStorage.setItem(savedUser, JSON.stringify(data.data.user))
            localStorage.setItem(authToken, data.data.token)

            yield put(setUserCreator(data.data.user))
        }

        yield put((successLoginCreator()))
    } catch (e) {
        yield put(errorLoginCreator())
    }
}
function* authAsync () {
    yield all([
        takeEvery(authTypes.LOGIN_TYPE, loginRequestAsync),
        takeEvery(authTypes.REGISTER_TYPE, registerRequestAsync),
    ])
}
export default authAsync