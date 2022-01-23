import {all, call, takeEvery, put} from "redux-saga/effects";
import {
    errorGetProfilesCreator, errorProfileCreator,
    profileTypes,
    successGetProfilesCreator, successProfileCreator,
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
function* profileAsync () {
    yield all([
        takeEvery(profileTypes.getProfilesType, getProfilesRequestAsync),
        takeEvery(profileTypes.profileType, profileRequestAsync)
    ])
}
export default profileAsync