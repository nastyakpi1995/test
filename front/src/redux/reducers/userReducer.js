import {savedUser} from "../../utils/constants";

export const userTypes = {
    setUserType: 'setUserType',
    SET_USER_TYPE: 'SET_USER_TYPE',
    SET_USERS_LOADING_TYPE: 'SET_USERS_LOADING_TYPE',
    TOGGLE_USER_MODAL_TYPE: 'TOGGLE_USER_MODAL_TYPE',

    // get Users
    GET_USERS_TYPE: 'GET_USERS_TYPE',
    SUCCESS_GET_USERS_TYPE: 'SUCCESS_GET_USERS_TYPE',
    ERROR_GET_USERS_TYPE: 'ERROR_GET_USERS_TYPE',

    // put user
    USER_TYPE: 'USER_TYPE',
    SUCCESS_USER_TYPE: 'SUCCESS_USER_TYPE',
    ERROR_USER_TYPE: 'ERROR_USER_TYPE'
}

const initialState = {
    user: JSON.parse(localStorage.getItem(savedUser)),
    loadingGetUsers: false,
    loadingPutUser: false,
    users: [],
    isModalVisible: false
}

const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case userTypes.setUserType: {
            return {
                ...state,
                user: action.payload
            }
        }

        // get users
        case userTypes.GET_USERS_TYPE: {
            return {
                ...state,
                loadingGetUsers: true,
            }
        }
        case userTypes.SUCCESS_GET_USERS_TYPE: {
            return {
                ...state,
                users: action.payload,
                loadingGetUsers: false
            }
        }
        case userTypes.ERROR_GET_USERS_TYPE: {
            return {
                ...state,
                loadingGetUsers: false
            }
        }

        // put user
        case userTypes.USER_TYPE: {
            return {
                ...state,
                loadingPutUser: true
            }
        }
        case userTypes.SUCCESS_USER_TYPE: {
            return {
                ...state,
                loadingPutUser: false,
                isModalVisible: !state.isModalVisible
            }
        }
        case userTypes.ERROR_USER_TYPE: {
            return {
                ...state,
                loadingPutUser: false,
            }
        }
        // Loading
        case userTypes.SET_USERS_LOADING_TYPE: {
            return {
                ...state,
                loadingGetUsers: false
            }
        }
        case userTypes.TOGGLE_USER_MODAL_TYPE:
            return {
                ...state,
                isModalVisible: !state.isModalVisible
            }

        default: {
            return state
        }
    }
}

export const setUserCreator = (user) => ({
    type: userTypes.setUserType,
    payload: user
})
export const setUsersLoadingCreator = () => ({
    type: userTypes.SET_USERS_LOADING_TYPE,
})

// modal user
export const toggleModalUser = () => ({
    type: userTypes.TOGGLE_USER_MODAL_TYPE
})

// get users
export const getUsersCreator = () => ({
    type: userTypes.GET_USERS_TYPE,
})
export const successGetUsersCreator = (users) => ({
    type: userTypes.SUCCESS_GET_USERS_TYPE,
    payload: users
})
export const errorGetUsersCreator = () => ({
    type: userTypes.ERROR_GET_USERS_TYPE
})

// put user
export const userCreator = (values, id) => ({
    type: userTypes.USER_TYPE,
    values,
    id
})
export const successUserCreator = () => ({
    type: userTypes.SUCCESS_USER_TYPE,
})
export const errorUserCreator = () => ({
    type: userTypes.ERROR_USER_TYPE
})

export default userReducer
