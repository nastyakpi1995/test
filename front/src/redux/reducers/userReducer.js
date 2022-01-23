import {savedUser} from "../../utils/constants";

export const userTypes = {
    setUserType: 'setUserType',
    setUsersLoadingType: 'getUsersLoadingType',

    // get Users
    getUsersType: 'getUsersType',
    successGetUsersType: 'successGetUsersType',
    errorGetUsersType: 'errorGetUsersType',

    // put user
    putUserType: 'putUserType',
    successPutUserType: 'successPutUserType',
    errorPutUserType: 'errorPutUserType',
    toggleUserModalType: 'toggleUserModalType'
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
        case userTypes.putUserType: {
            return {
                ...state,
                loadingPutUser: true
            }
        }
        case userTypes.successPutUserType: {
            return {
                ...state,
                loadingPutUser: false,
                isModalVisible: !state.isModalVisible
            }
        }
        case userTypes.errorPutUserType: {
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
export const putUserCreator = (values, id) => ({
    type: userTypes.putUserType,
    values,
    id
})
export const successPutUserCreator = () => ({
    type: userTypes.successPutUserType,
})
export const errorPutUserCreator = (users) => ({
    type: userTypes.errorPutUserType
})

export default userReducer
