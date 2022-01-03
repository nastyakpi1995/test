const GET_PROFILES = 'ADD_PROFILE'
const SELECTED_BY_ADMIN_USER_ID = 'SELECTED_BY_ADMIN_USER'

const initialState = {
    profiles: [],
    selectedByAdminUserId: ''
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
                selectedByAdminUserId: action.payload
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
export const setSelectedByAdminUserIdCreator = (id) => ({
    type: SELECTED_BY_ADMIN_USER_ID,
    payload: id
})

export default profileReducer
