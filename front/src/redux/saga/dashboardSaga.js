import {all, call, takeEvery, put} from "redux-saga/effects";

import {request} from "../../utils/apiCaller";
import {
    dashboardTypes,
    errorGetDashboardDataCreator,
    successGetDashboardDataCreator
} from "../reducers/dashboardReducer";


function* getDashboardRequestAsync () {
    try {
        const dashboard = yield call(request, '/admin/dashboard', 'get')

        yield put(successGetDashboardDataCreator(dashboard.data.data))
    } catch (e) {
        yield put(errorGetDashboardDataCreator())
    }
}
function* dashboardAsync () {
    yield all([
        takeEvery(dashboardTypes.GET_DASHBOARD_TYPE, getDashboardRequestAsync),
    ])
}
export default dashboardAsync