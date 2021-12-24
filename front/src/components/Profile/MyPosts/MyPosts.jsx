import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {TextArea} from "../../common/controlsForm/TextArea";

const maxLength10 = maxLengthCreator(10)
const MyPosts = ({posts, addPost}) => {

    const addPostClick = (values) => {
        addPost(values.newPostText)
    }

    return (
        <div className={s.content}>
            My posts
            <ReduxAddMyPostForm onSubmit={addPostClick} />
            <div className={s.posts}>
                {posts.map(({text, likeCount}, idx) => (
                    <Post key={idx} message={text} likeCount={likeCount}/>
                ))}
            </div>
        </div>
    )
}

const AddMyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength10]} component={TextArea} name={'newPostText'} placeholder={'add new posts'}/>
            <button type={'submit'}>Add post</button>
        </form>
    )
}
const ReduxAddMyPostForm = reduxForm({form: 'addPost'})(AddMyPostForm)

export default MyPosts;
