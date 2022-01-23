import {takeEvery, call, put, all} from 'redux-saga/effects'
import {
    errorGetUsersCreator, errorPutUserCreator,
    successGetUsersCreator, successPutUserCreator,
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

function* putUserRequestAsync({id, values}) {
    try {
        yield call(request, `/admin/user/${id}`, 'put', values)
        yield put(successPutUserCreator())
    } catch (e) {
        yield put(errorPutUserCreator())
    }
}


function* userAsync() {
    yield all([
        takeEvery(userTypes.getUsersType, getUsersRequestAsync),
        takeEvery(userTypes.putUserType, putUserRequestAsync)
    ])
}

export default userAsync
