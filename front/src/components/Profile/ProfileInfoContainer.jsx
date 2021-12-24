import ProfileInfo from "./ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {setUserProfileCreator} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import {getUserProfileSelect} from "../../redux/selects/users";
import {withAuthRedirect} from "../../hoс/withAuthRedirect";
import {compose} from "redux";


const ProfileInfoContainer = () => {
    const userProfile = useSelector(state => {
        return getUserProfileSelect(state)
    })
    const routes = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const currentUserId = routes?.id
        dispatch(setUserProfileCreator(currentUserId))
    }, [dispatch])

    return (
        <ProfileInfo userProfile={userProfile} />
    )
}

const AuthRedirectProfile = compose(
    withAuthRedirect
)(ProfileInfoContainer)

export default AuthRedirectProfile;
