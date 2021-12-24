import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'
import {getPostsSelect} from "../../../redux/selects/profile";



const mapStateToProps = (state) => ({
        posts: getPostsSelect(state)
})


const MyPostsContainer = connect(mapStateToProps, {addPost: addPostActionCreator})(MyPosts) ;

export default MyPostsContainer ;
