const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW_USER = 'FOLLOW_USER';
const FOLLOW_LOADER = 'FOLLOW_LOADER';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const dataUsers =  [
    {id: 1, fullName: 'Sveta', img: 'https://post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg', status: 'I am a boss', location: {city: 'Misc', country: 'Belarus'}, isFollow: true},
    {id: 2, fullName: 'Sveta', img: 'https://post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg', status: 'I am a boss', location: {city: 'Misc', country: 'Belarus'}, isFollow: true},
    {id: 3, fullName: 'Sveta', img: 'https://post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg', status: 'I am a boss', location: {city: 'Misc', country: 'Belarus'}, isFollow: true},
    {id: 4, fullName: 'Sveta', img: 'https://post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg', status: 'I am a boss', location: {city: 'Misc', country: 'Belarus'}, isFollow: true},
    {id: 5, fullName: 'Sveta', img: 'https://post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg', status: 'I am a boss', location: {city: 'Misc', country: 'Belarus'}, isFollow: true},
    {id: 6, fullName: 'Sveta', img: 'https://post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg', status: 'I am a boss', location: {city: 'Misc', country: 'Belarus'}, isFollow: true},
];
const initState = {
    users: [],
    userProfile: {},
    followLoaderArray: []
}

const usersReducer = (state= initState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: dataUsers
            }
        }
        case TOGGLE_FOLLOW_USER: {
            const currentUsers = state.users.map(el => {
                if (el.id === action.idUser) {
                    return {...el, isFollow: !el.isFollow}
                }
                return el
            })
            return {
                ...state,
                users: currentUsers,
                followLoaderArray: state.followLoaderArray.filter(el => el.id !== action.id)
            }
        }
        case FOLLOW_LOADER: {
            return {
                ...state,
                followLoaderArray: [...state.followLoaderArray, action.id]
            }
        }
        case SET_USER_PROFILE: {
            const findUser = dataUsers.find(el => +el.id === +action.id)
            return {
                ...state,
                userProfile: findUser
            }
        }

        default: {
            return state
        }
    }

}
export const setUsersCreator = () => ({
    type: SET_USERS,
})
export const toggleFollowUserCreator = (id) => ({
    type: TOGGLE_FOLLOW_USER,
    idUser: id
})
export const setUserProfileCreator = (id) => ({
    type: SET_USER_PROFILE,
    id
})
 const followUserCreator = (id) => ({
    type: FOLLOW_LOADER,
    id
})

export const toggleFollowUserThunkCreator = (id) => (dispatch) => {
    dispatch(followUserCreator(id));
    setTimeout(() => {
        dispatch(toggleFollowUserCreator(id))
    }, 1000)
}


export default usersReducer
