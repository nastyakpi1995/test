import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import {
    setUsersCreator,
    toggleFollowUserCreator,
    toggleFollowUserThunkCreator
} from "../../redux/usersReducer";
import {getFollowLoaderArraySelect, getUsersSelect} from "../../redux/selects/users";

const UsersContainer = () => {
    const users = useSelector(state => {
        debugger
        return getUsersSelect(state)
    })
    const followLoaderArray = useSelector(state => {
        return getFollowLoaderArraySelect(state)
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUsersCreator())
    }, [dispatch])
    return (
        <Users toggleFollowUser={toggleFollowUserCreator}
               dispatch={dispatch}
               users={users}
               toggleFollowUserThunkCreator={toggleFollowUserThunkCreator}
               followLoaderArray={followLoaderArray}/>
    )
}
export default UsersContainer
