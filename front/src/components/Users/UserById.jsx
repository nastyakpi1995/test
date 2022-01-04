import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import UserMainWrapper from "../common/UserMainWrapper";
import Profile from "../Profiles/Profile";
import {getUserAndProfilesById} from "../../api/usersApi";
import {useSelector} from "react-redux";

const UserById = () => {
    const {userId} = useParams()
    const [userData, setUserData] = useState({})
    const isLoader = useSelector(state => state.profile.isLoader)

    useEffect(() => {
        getUserAndProfilesById(userId).then(({data}) => {
            setUserData(data.userData)
        })
    }, [])

    useEffect(() => {
        if (isLoader) {
            getUserAndProfilesById(userId).then(({data}) => {
                setUserData(data.userData)
            })
        }
    }, [isLoader])

    return (
        <UserMainWrapper>
            <div>
                {userData.user?.username}
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {userData.userProfiles?.length >= 0 ? userData.userProfiles.map((profile, idx) => (
                    <Profile key={idx}
                             profile={profile}/>
                )) : null}
            </div>
        </UserMainWrapper>
    )
};

export default UserById
