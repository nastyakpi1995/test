import {takeEvery, call, put, all} from 'redux-saga/effects'
import {
    errorGetUsersCreator, errorPutUserCreator,
    successGetUsersCreator, successPutUserCreator,
    userTypes
} from "../reducers/userReducer";
import {request} from "../../utils/apiCaller";


function* getUsersAsync() {
    try {
        const users = yield call(request, '/admin/users', 'get')
        yield put(successGetUsersCreator(users.data.users))
    } catch (e) {
        yield put(errorGetUsersCreator())
    }
}

function* putUserAsync({id, values}) {
    try {
       const user = yield call(request, `/admin/user/${id}`, 'put', values)

        yield put(successPutUserCreator(user))
    } catch (e) {
        yield put(errorPutUserCreator())
    }
}


function* userAsync() {
    yield all([
        takeEvery(userTypes.getUsersType, getUsersAsync),
        takeEvery(userTypes.putUserType, putUserAsync)
    ])
}

export default userAsync
