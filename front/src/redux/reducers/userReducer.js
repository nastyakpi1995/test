import {savedUser} from "../../utils/constants";

export const userTypes = {
    setUserType: 'setUserType',
    getUsersType: 'getUsersType',
    successUsersType: 'successUsersType',
    errorUsersType: 'errorUsersType',
}

const initialState = {
    user: JSON.parse(localStorage.getItem(savedUser)),
    loading: false,
    users: []
}

const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case userTypes.setUserType: {
            return {
                ...state,
                user: action.payload
            }
        }
        case userTypes.getUsersType: {
            return {
                ...state,
                loading: true
            }
        }
        case userTypes.successUsersType: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        case userTypes.errorUsersType: {
            return {
                ...state,
                loading: false
            }
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
export const getUsersCreator = () => ({
    type: userTypes.getUsersType,
})
export const successUsersCreator = (users) => ({
    type: userTypes.successUsersType,
    payload: users
})
export const errorUsersCreator = (users) => ({
    type: userTypes.errorUsersType
})

export default userReducer
