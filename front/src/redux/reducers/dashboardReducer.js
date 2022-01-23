
export const dashboardTypes = {
    GET_DASHBOARD_TYPE: 'DASHBOARD_TYPE',
    SUCCESS_DASHBOARD_TYPE: 'SUCCESS_DASHBOARD_TYPE',
    ERROR_DASHBOARD_TYPE: 'ERROR_DASHBOARD_TYPE',
}

const initState = {
    dashboardData: [],
    loadingDashboard: false
}

const dashboardReducer = (state= initState, action) => {
    switch (action.type) {

        // get profiles
        case dashboardTypes.GET_DASHBOARD_TYPE: {
            return {
                ...state,
                loadingDashboard: true
            }
        }
        case dashboardTypes.SUCCESS_DASHBOARD_TYPE: {
            return {
                ...state,
                loadingDashboard: false,
                dashboardData: action.payload,
            }
        }
        case dashboardTypes.ERROR_DASHBOARD_TYPE: {
            return {
                ...state,
                loadingDashboard: false,
            }
        }


        default: {
            return state
        }
    }
}

export default dashboardReducer;

export const getDashboardDataCreator = (messageData) => ({
    type: dashboardTypes.GET_DASHBOARD_TYPE,
    messageData,
})
export const successGetDashboardDataCreator = (data) => ({
    type: dashboardTypes.SUCCESS_DASHBOARD_TYPE,
    payload: data
})
export const errorGetDashboardDataCreator = () => ({
    type: dashboardTypes.ERROR_DASHBOARD_TYPE,
})
