import {initialProfileValues} from "../../utils/constants";

export const profileTypes = {
    toggleLoaderProfileType: 'toggleLoaderProfileType',
    toggleOpenModalProfileType: 'toggleOpenModalProfile',
    setActiveProfileType: 'setActiveProfileType',

    getProfilesType: 'getProfilesType',
    successGetProfilesType: 'successGetProfilesType',
    errorGetProfilesType: 'errorGetProfilesType',

    profileType: 'profileType',
    successProfileType: 'successProfileType',
    errorProfileType: 'errorProfileType'
}

const initialState = {
    isOpenModalProfile: false,
    activeProfile: initialProfileValues,
    loadingGetProfiles: false,
    loadingProfile: false,
    profiles: []
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case profileTypes.toggleOpenModalProfileType: {
            return {
                ...state,
                isOpenModalProfile: !state.isOpenModalProfile
            }
        }
        case profileTypes.setActiveProfileType: {
            return {
                ...state,
                activeProfile: action.payload
            }
        }
        case profileTypes.toggleLoaderProfileType: {
            return {
                ...state,
                loadingGetProfiles: !state.loadingGetProfiles
            }
        }

        // get profiles
        case profileTypes.getProfilesType: {
            return {
                ...state,
                loadingGetProfiles: true
            }
        }
        case profileTypes.successGetProfilesType: {
            return {
                ...state,
                loadingGetProfiles: false,
                profiles: action.payload,
                loadingProfile: false,
            }
        }
        case profileTypes.errorGetProfilesType: {
            return {
                ...state,
                loadingGetProfiles: false,
                loadingProfile: false,
            }
        }

        // put profile
        case profileTypes.profileType: {
            return {
                ...state,
                loadingProfile: true
            }
        }

        case profileTypes.successProfileType: {
            return {
                ...state,
                isOpenModalProfile: false,
                activeProfile: initialProfileValues
            }
        }
        case profileTypes.errorProfileType: {
            return {
                ...state,
                loadingProfile: false
            }
        }

        default: {
            return state
        }
    }
}

export const toggleIsOpenModalCreator = () => ({
    type: profileTypes.toggleOpenModalProfileType,
})

export const setActiveProfileCreator = (profile) => ({
    type: profileTypes.setActiveProfileType,
    payload: profile
})
export const toggleLoaderProfileCreator = () => ({
    type: profileTypes.toggleLoaderProfileType,
})

// get Profiles
export const getProfilesCreator = () => ({
    type: profileTypes.getProfilesType
})
export const successGetProfilesCreator = (profiles) => ({
    type: profileTypes.successGetProfilesType,
    payload: profiles
})
export const errorGetProfilesCreator = () => ({
    type: profileTypes.errorGetProfilesType
})

// put Profiles
export const profileCreator = (values) => ({
    type: profileTypes.profileType,
    values
})

export const successProfileCreator = () => ({
    type: profileTypes.successProfileType,
})

export const errorProfileCreator = () => ({
    type: profileTypes.errorProfileType
})

export default profileReducer
