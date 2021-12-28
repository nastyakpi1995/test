import React, {useEffect} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import NewProfile from "./NewProfile";
import Profile from "./Profile";
import {getProfilesAxiosRequest} from "../../api/usersApi";

const Profiles = () => {
    useEffect(() => {
        getProfilesAxiosRequest().then(data => {
            debugger
        })
    }, [])
    return (
        <UserMainWrapper>
            <div>
                <Profile />
                <NewProfile />
            </div>
        </UserMainWrapper>
    )
}

export default Profiles
