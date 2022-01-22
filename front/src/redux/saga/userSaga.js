import {takeEvery, call, put} from 'redux-saga/effects'
import {errorUsersCreator, successUsersCreator, userTypes} from "../reducers/userReducer";
import {request} from "../../utils/apiCaller";


function* getUsersAsync() {
    try {
        const users = yield call(request, '/admin/users', 'get')
        yield put(successUsersCreator(users.data.users))
    } catch (e) {
        yield put(errorUsersCreator())
    }
}


function* usersAsync() {
    yield takeEvery(userTypes.getUsersType, getUsersAsync)
}

export default usersAsync
