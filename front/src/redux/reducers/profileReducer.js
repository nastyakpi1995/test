import {initialProfileValues} from "../../utils/constants";

export const profileTypes = {
    SET_LOADER_PROFILE_TYPE: 'SET_LOADER_PROFILE_TYPE',
    SET_OPEN_MODAL_PROFILE_TYPE: 'SET_OPEN_MODAL_PROFILE_TYPE',
    SET_ACTIVE_PROFILE_TYPE: 'SET_ACTIVE_PROFILE_TYPE',

    // GET PROFILES
    GET_PROFILES_TYPE: 'GET_PROFILES_TYPE',
    SUCCESS_GET_PROFILES_TYPE: 'SUCCESS_GET_PROFILES_TYPE',
    ERROR_GET_PROFILES_TYPE: 'ERROR_GET_PROFILES_TYPE',

    // PROFILE
    profileType: 'profileType',
    PROFILE_TYPE: 'PROFILE_TYPE',
    SUCCESS_PROFILE_TYPE: 'SUCCESS_PROFILE_TYPE',
    ERROR_PROFILE_TYPE: 'ERROR_PROFILE_TYPE',

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
        case profileTypes.SET_ACTIVE_PROFILE_TYPE: {
            return {
                ...state,
                activeProfile: action.payload
            }
        }
        case profileTypes.SET_LOADER_PROFILE_TYPE: {
            return {
                ...state,
                loadingGetProfiles: false,
                loadingProfile: false
            }
        }

        // get profiles
        case profileTypes.GET_PROFILES_TYPE: {
            return {
                ...state,
                loadingGetProfiles: true
            }
        }
        case profileTypes.SUCCESS_GET_PROFILES_TYPE: {
            return {
                ...state,
                loadingGetProfiles: false,
                profiles: action.payload,
                loadingProfile: false,
            }
        }
        case profileTypes.ERROR_GET_PROFILES_TYPE: {
            return {
                ...state,
                loadingGetProfiles: false,
                loadingProfile: false,
            }
        }

        // put profile
        case profileTypes.PROFILE_TYPE: {
            return {
                ...state,
                loadingProfile: true
            }
        }

        case profileTypes.SUCCESS_PROFILE_TYPE: {
            return {
                ...state,
                isOpenModalProfile: false,
                activeProfile: initialProfileValues
            }
        }
        case profileTypes.ERROR_PROFILE_TYPE: {
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
    type: profileTypes.SET_ACTIVE_PROFILE_TYPE,
    payload: profile
})
export const setLoaderProfileCreator = () => ({
    type: profileTypes.SET_LOADER_PROFILE_TYPE,
})

// get Profiles
export const getProfilesCreator = () => ({
    type: profileTypes.GET_PROFILES_TYPE
})
export const successGetProfilesCreator = (profiles) => ({
    type: profileTypes.SUCCESS_GET_PROFILES_TYPE,
    payload: profiles
})
export const errorGetProfilesCreator = () => ({
    type: profileTypes.ERROR_GET_PROFILES_TYPE
})

// put Profiles
export const profileCreator = (values) => ({
    type: profileTypes.PROFILE_TYPE,
    values
})

export const successProfileCreator = () => ({
    type: profileTypes.SUCCESS_PROFILE_TYPE,
})

export const errorProfileCreator = () => ({
    type: profileTypes.ERROR_PROFILE_TYPE
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
