import {all, call, takeEvery, put} from "redux-saga/effects";
import {
    errorGetProfilesCreator, errorGetUserDataByIdCreator, errorProfileCreator,
    profileTypes,
    successGetProfilesCreator, successGetUserDataByIdCreator, successProfileCreator,
} from "../reducers/profileReducer";
import {request} from "../../utils/apiCaller";


function* profileRequestAsync ({values}) {
    try {
        yield call(request,`/private/profile/${values.url}/${values.id}`, values.method, values)

        yield put(successProfileCreator())
    } catch (e) {
        yield put(errorProfileCreator())
    }
}
function* getProfilesRequestAsync () {
    try {
        const profiles = yield call(request, '/private/profiles', 'get')

        yield put(successGetProfilesCreator(profiles.data.data))
    } catch (e) {
        yield put(errorGetProfilesCreator())
    }
}
function* getUserDataByIdRequestAsync ({userId}) {
    try {
        const userDataById = yield call(request, `/admin/user/${userId}`, 'get')

        yield put(successGetUserDataByIdCreator(userDataById.data.userData))
    } catch (e) {
        yield put(errorGetUserDataByIdCreator())
    }
}

function* profileAsync () {
    yield all([
        takeEvery(profileTypes.getProfilesType, getProfilesRequestAsync),
        takeEvery(profileTypes.profileType, profileRequestAsync),
        takeEvery(profileTypes.GET_USER_DATA_BY_ID, getUserDataByIdRequestAsync),
    ])
}
export default profileAsync
