import {initialProfileValues} from "../../utils/constants";

const types = {
    toggleLoaderProfileType: 'toggleLoaderProfileType',
    toggleOpenModalProfileType: 'toggleOpenModalProfile',
    setActiveProfileType: 'setActiveProfileType'
}

const initialState = {
    isOpenModalProfile: false,
    activeProfile: initialProfileValues,
    isLoader: false
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.toggleOpenModalProfileType: {
            return {
                ...state,
                isOpenModalProfile: !state.isOpenModalProfile
            }
        }
        case types.setActiveProfileType: {
            return {
                ...state,
                activeProfile: action.payload
            }
        }
        case types.toggleLoaderProfileType: {
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
    type: types.toggleOpenModalProfileType,
})

export const setActiveProfileCreator = (profile) => ({
    type: types.setActiveProfileType,
    payload: profile
})
export const toggleLoaderProfileCreator = () => ({
    type: types.toggleLoaderProfileType,
})

export default profileReducer
