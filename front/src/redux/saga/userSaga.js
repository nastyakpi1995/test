import {takeEvery, call, put, all} from 'redux-saga/effects'
import {
    errorGetUsersCreator, errorUserCreator,
    successGetUsersCreator, successUserCreator,
    userTypes
} from "../reducers/userReducer";
import {request} from "../../utils/apiCaller";

function* getUsersRequestAsync() {
    try {
        const users = yield call(request, '/admin/users', 'get')
        yield put(successGetUsersCreator(users.data.users))
    } catch (e) {
        yield put(errorGetUsersCreator())
    }
}

function* userRequestAsync({id, values}) {
    try {
        yield call(request, `/admin/user/${id}`, values.method, values)
        yield put(successUserCreator())
    } catch (e) {
        yield put(errorUserCreator())
    }
}


function* userAsync() {
    yield all([
        takeEvery(userTypes.getUsersType, getUsersRequestAsync),
        takeEvery(userTypes.userType, userRequestAsync)
    ])
}

export default userAsync
