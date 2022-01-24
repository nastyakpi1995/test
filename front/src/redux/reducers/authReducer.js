import {initialProfileValues} from "../../utils/constants";

export const authTypes = {
    // LOGIN
    LOGIN_TYPE: 'LOGIN_TYPE',
    SUCCESS_LOGIN_TYPE: 'SUCCESS_LOGIN_TYPE',
    ERROR_LOGIN_TYPE: 'ERROR_LOGIN_TYPE',

    // is Success
    SET_IS_SUCCESS_LOGIN_TYPE: 'SET_IS_SUCCESS_LOGIN_TYPE',
}

const initialState = {
    loadingLogin: false,
    isSuccessLogin: false
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        // get profiles
        case authTypes.LOGIN_TYPE: {
            return {
                ...state,
                loadingLogin: true
            }
        }
        case authTypes.SUCCESS_LOGIN_TYPE: {
            return {
                ...state,
                loadingLogin: false,
                isSuccessLogin: true
            }
        }
        case authTypes.ERROR_LOGIN_TYPE: {
            return {
                ...state,
                loadingLogin: false
            }
        }
        case authTypes.SET_IS_SUCCESS_LOGIN_TYPE: {
            return {
                ...state,
                isSuccessLogin: false
            }
        }
        default: {
            return state
        }
    }
}

// get Profiles
export const loginCreator = (body) => ({
    type: authTypes.LOGIN_TYPE,
    body
})
export const successLoginCreator = (profiles) => ({
    type: authTypes.SUCCESS_LOGIN_TYPE,
    payload: profiles
})
export const errorLoginCreator = () => ({
    type: authTypes.ERROR_LOGIN_TYPE
})

// is success login
export const setIsSuccessLogin = () => ({
    type: authTypes.SET_IS_SUCCESS_LOGIN_TYPE,
})


export default authReducer
