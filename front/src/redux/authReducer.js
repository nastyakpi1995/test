const SET_AUTH_USER_DATE = 'SET_AUTH_USER_DATE';
const TOGGLE_AUTH = 'TOGGLE_AUTH'

const initState = {
    isAuth: true,
    authData: {
        userId: 0,
        login: '',
        email: ''
    }

}

const authReducer = (state= initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATE: {
            return {
                ...state,
                authData: action.authData,
                isAuth: true
            }
        }
        case TOGGLE_AUTH: {
            return {
                ...state,
                isAuth: !state.isAuth
            }
        }
        default: {
            return state
        }
    }

}
export const setAuthUserCreator = (authData) => ({
    type: SET_AUTH_USER_DATE,
    authData
})
export const toggleAuthCreator = () => {
    return {
        type: TOGGLE_AUTH
    }
}
export default authReducer
