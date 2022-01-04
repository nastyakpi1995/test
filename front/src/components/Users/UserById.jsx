import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import UserMainWrapper from "../common/UserMainWrapper";
import Profile from "../Profiles/Profile";
import {getUserAndProfilesById} from "../../api/usersApi";

const UserById = () => {
    const {userId} = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        getUserAndProfilesById(userId).then(({data}) => {
            setUserData(data.userData)
        })
    }, [])

    return (
        <UserMainWrapper>
            <div>
                {userData.user?.username}
            </div>

            {userData.userProfiles?.length >= 0 ? userData.userProfiles.map((profile, idx) => (
                <Profile key={idx}
                         profile={profile}
                         // showModal={toggleIsOpenModal}
                />
            )) : null}
        </UserMainWrapper>
    )
};

export default UserById
