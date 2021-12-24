const ADD_POST = 'ADD_POST'

const initState = {
    posts: [
        {text: 'hi how are you?', likeCount: 0},
        {text: 'its another message?', likeCount: 5},
    ],
}
const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                text: action.newPostText,
                likeCount: 7
            }
            const res = [...state.posts, newPost]
            return {
                ...state,
                posts: res
            }
        }
        default: {
            return state
        }
    }

}
export const addPostActionCreator = (text) => ({
    type: ADD_POST,
    newPostText: text
})


export default profileReducer