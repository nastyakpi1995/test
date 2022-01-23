import {initialProfileValues} from "../../utils/constants";

export const profileTypes = {
    toggleLoaderProfileType: 'toggleLoaderProfileType',
    SET_OPEN_MODAL_PROFILE_TYPE: 'SET_OPEN_MODAL_PROFILE_TYPE',
    setActiveProfileType: 'setActiveProfileType',

    getProfilesType: 'getProfilesType',
    successGetProfilesType: 'successGetProfilesType',
    errorGetProfilesType: 'errorGetProfilesType',

    profileType: 'profileType',
    successProfileType: 'successProfileType',
    errorProfileType: 'errorProfileType',

    // get user Data by id
    GET_USER_DATA_BY_ID: 'GET_USER_DATA_BY_ID',
    SUCCESS_GET_USER_DATA_BY_ID: 'SUCCESS_GET_USER_DATA_BY_ID',
    ERROR_GET_USER_DATA_BY_ID: 'SUCCESS_GET_USER_DATA_BY_ID',

    // clear form
    SET_CLEAR_FORM: 'SET_CLEAR_FORM'
}

const initialState = {
    isOpenModalProfile: false,
    activeProfile: initialProfileValues,
    loadingGetProfiles: false,
    loadingProfile: false,
    isClearForm: false,

    profiles: [],
    userDataById: []
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case profileTypes.SET_OPEN_MODAL_PROFILE_TYPE: {
            return {
                ...state,
                isOpenModalProfile: action.payload
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

        // user profile by id
        case profileTypes.GET_USER_DATA_BY_ID: {
            return {
                ...state,
                // loadingProfile: true
            }
        }
        case profileTypes.SUCCESS_GET_USER_DATA_BY_ID: {
            return {
                ...state,
                loadingProfile: false,
                userDataById: action.payload
            }
        }
        case profileTypes.ERROR_GET_USER_DATA_BY_ID: {
            return {
                ...state,
                loadingProfile: false
            }
        }
        case profileTypes.SET_CLEAR_FORM: {
            return {
                ...state,
                isClearForm: false
            }
        }
        default: {
            return state
        }
    }
}

export const setIsOpenModalCreator = (payload) => ({
    type: profileTypes.SET_OPEN_MODAL_PROFILE_TYPE,
    payload
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


// get user Data by id
export const getUserDataByIdCreator = (userId) => ({
    type: profileTypes.GET_USER_DATA_BY_ID,
    userId
})

export const successGetUserDataByIdCreator = (usersData) => ({
    type: profileTypes.SUCCESS_GET_USER_DATA_BY_ID,
    payload: usersData
})

export const errorGetUserDataByIdCreator = () => ({
    type: profileTypes.ERROR_GET_USER_DATA_BY_ID
})


export default profileReducer
