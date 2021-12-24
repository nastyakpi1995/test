import profileReducer, {addPostActionCreator} from "./profileReducer";
const initState = {
    posts: [
        {text: 'hi how are you?', likeCount: 0},
        {text: 'its another message?', likeCount: 5},
    ],
}
it('new Post Text', () => {
    const NewPost = addPostActionCreator('new Post Text')
    const testProfileReducer = profileReducer(initState , NewPost)
    console.log('testProfileReducer', testProfileReducer.posts.length)
    expect(testProfileReducer.posts.length).toBe(3)
})

it('new Post Text shpold be new Post Text', () => {
    const newText = 'new Post Text'
    const NewPost = addPostActionCreator(newText)
    const testProfileReducer = profileReducer(initState , NewPost)
    console.log('testProfileReducer', testProfileReducer.posts.length)
    expect(testProfileReducer.posts[2].text).toBe(newText)
})
