import {savedUser} from "../../utils/constants";

const SET_USER = 'SET_USER'

const initialState = {
    user: JSON.parse(localStorage.getItem(savedUser))
}

const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export const setUserCreator = (user) => ({
    type: SET_USER,
    payload: user
})

export default userReducer
