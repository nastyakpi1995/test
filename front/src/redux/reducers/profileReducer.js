import {initialProfileValues} from "../../utils/constants";

const TOGGLE_OPEN_MODAL_PROFILE = 'TOGGLE_OPEN_MODAL_PROFILE'
const SET_ACTIVE_PROFILE = 'SET_ACTIVE_PROFILE'
const TOGGLE_IS_LOADER_PROFILE = 'TOGGLE_IS_LOADER_PROFILE'

const initialState = {
    isOpenModalProfile: false,
    activeProfile: initialProfileValues,
    isLoader: false
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
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
