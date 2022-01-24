
export const authTypes = {
    // LOGIN
    LOGIN_TYPE: 'LOGIN_TYPE',
    SUCCESS_LOGIN_TYPE: 'SUCCESS_LOGIN_TYPE',
    ERROR_LOGIN_TYPE: 'ERROR_LOGIN_TYPE',

    // register
    REGISTER_TYPE: 'REGISTER_TYPE',
    SUCCESS_REGISTER_TYPE: 'SUCCESS_REGISTER_TYPE',
    ERROR_REGISTER_TYPE: 'ERROR_REGISTER_TYPE',

    // is Success
    SET_IS_SUCCESS_LOGIN_TYPE: 'SET_IS_SUCCESS_LOGIN_TYPE',
    SET_IS_SUCCESS_REGISTER_TYPE: 'SET_IS_SUCCESS_REGISTER_TYPE',
}

const initialState = {
    loadingLogin: false,
    isSuccessLogin: false,
    loadingRegister: false,
    isSuccessRegister: false
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

        // REGISTER
        case authTypes.REGISTER_TYPE: {
            return {
                ...state,
                loadingRegister: true
            }
        }
        case authTypes.SUCCESS_REGISTER_TYPE: {
            return {
                ...state,
                loadingRegister: false,
                isSuccessRegister: true
            }
        }
        case authTypes.ERROR_REGISTER_TYPE: {
            return {
                ...state,
                loadingRegister: false
            }
        }

        case authTypes.SET_IS_SUCCESS_REGISTER_TYPE: {
            return {
                ...state,
                isSuccessRegister: false
            }
        }
        default: {
            return state
        }
    }
}

// login
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

// register
export const registerCreator = (body) => ({
    type: authTypes.REGISTER_TYPE,
    body
})
export const successRegisterCreator = (profiles) => ({
    type: authTypes.SUCCESS_REGISTER_TYPE,
    payload: profiles
})
export const errorRegisterCreator = () => ({
    type: authTypes.ERROR_REGISTER_TYPE
})

// is success register
export const setIsSuccessRegister = () => ({
    type: authTypes.SET_IS_SUCCESS_REGISTER_TYPE,
})
export default authReducer
