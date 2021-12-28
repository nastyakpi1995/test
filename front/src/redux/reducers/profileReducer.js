const GET_PROFILES = 'ADD_PROFILE'
const CREATE_PROFILE_LOADER = 'CREATE_PROFILE_LOADER'

const initialState = {
    profiles: []
}

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_PROFILES: {
            return {
                ...state,
                profiles: action.profiles,
            }
        }
        case CREATE_PROFILE_LOADER: {
            return {
                ...state,
                isLoading: action.isLoading
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

export default profileReducer
