import {savedUser} from "../../utils/constants";

export const userTypes = {
    setUserType: 'setUserType',
    setUsersLoadingType: 'getUsersLoadingType',
    toggleUserModalType: 'toggleUserModalType',

    // get Users
    getUsersType: 'getUsersType',
    successGetUsersType: 'successGetUsersType',
    errorGetUsersType: 'errorGetUsersType',

    // put user
    userType: 'putUserType',
    successUserType: 'successPutUserType',
    errorUserType: 'errorPutUserType',
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
        case userTypes.getUsersType: {
            return {
                ...state,
                loadingGetUsers: true,
            }
        }
        case userTypes.successGetUsersType: {
            return {
                ...state,
                users: action.payload,
                loadingGetUsers: false
            }
        }
        case userTypes.errorGetUsersType: {
            return {
                ...state,
                loadingGetUsers: false
            }
        }

        // put user
        case userTypes.userType: {
            return {
                ...state,
                loadingPutUser: true
            }
        }
        case userTypes.successUserType: {
            return {
                ...state,
                loadingPutUser: false,
                isModalVisible: !state.isModalVisible
            }
        }
        case userTypes.errorUserType: {
            return {
                ...state,
                loadingPutUser: false,
            }
        }
        // Loading
        case userTypes.setUsersLoadingType: {
            return {
                ...state,
                loadingGetUsers: false
            }
        }
        case userTypes.toggleUserModalType:
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
    type: userTypes.setUsersLoadingType,
})

// modal user
export const toggleModalUser = () => ({
    type: userTypes.toggleUserModalType
})

// get users
export const getUsersCreator = () => ({
    type: userTypes.getUsersType,
})
export const successGetUsersCreator = (users) => ({
    type: userTypes.successGetUsersType,
    payload: users
})
export const errorGetUsersCreator = () => ({
    type: userTypes.errorGetUsersType
})

// put user
export const userCreator = (values, id) => ({
    type: userTypes.userType,
    values,
    id
})
export const successUserCreator = () => ({
    type: userTypes.successUserType,
})
export const errorUserCreator = (users) => ({
    type: userTypes.errorUserType
})

export default userReducer
