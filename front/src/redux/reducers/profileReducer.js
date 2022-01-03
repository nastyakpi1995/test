import {initialUserValues} from "../../utils/helpers";

const GET_PROFILES = 'ADD_PROFILE'
const SELECTED_BY_ADMIN_USER_ID = 'SELECTED_BY_ADMIN_USER'
const TOGGLE_OPEN_MODAL_PROFILE = 'IS_OPEN_MODAL_PROFILE'
const SET_ACTIVE_PROFILE = 'SET_ACTIVE_PROFILE'
const TOGGLE_IS_LOADER_PROFILE = 'TOGGLE_IS_LOADER_PROFILE'

const initialState = {
    profiles: [],
    selectedByAdminUser: {},
    isOpenModalProfile: false,
    activeProfile: initialUserValues,
    isLoader: false
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_PROFILES: {
            return {
                ...state,
                profiles: action.profiles,
            }
        }
        case SELECTED_BY_ADMIN_USER_ID: {
            return {
                ...state,
                selectedByAdminUser: action.payload
            }
        }
        case TOGGLE_OPEN_MODAL_PROFILE: {
            return {
                ...state,
                isOpenModalProfile: !state.isOpenModalProfile
            }
        }
        case SET_ACTIVE_PROFILE: {
            return {
                ...state,
                activeProfile: action.payload
            }
        }
        case TOGGLE_IS_LOADER_PROFILE: {
            return {
                ...state,
                isLoader: !state.isLoader
            }
        }
        default: {
            return state
        }
    }
}

export const getProfilesCreator = (profiles) => ({
    type: GET_PROFILES,
    profiles
})
export const setSelectedByAdminUserCreator = (user) => ({
    type: SELECTED_BY_ADMIN_USER_ID,
    payload: user
})

export const toggleIsOpenModalCreator = () => ({
    type: TOGGLE_OPEN_MODAL_PROFILE,
})

export const setActiveProfileCreator = (profile) => ({
    type: SET_ACTIVE_PROFILE,
    payload: profile
})
export const toggleLoaderProfileCreator = () => ({
    type: TOGGLE_IS_LOADER_PROFILE,
})

export default profileReducer
