import React, {useEffect} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import NewProfile from "./NewProfile";
import Profile from "./Profile";
import {getProfilesAxiosRequest} from "../../api/usersApi";
import {createdProfileLoaderCreator, getProfilesCreator} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getProfileLoading, getProfiles} from "../../redux/selects/profile";

const Profiles = () => {
    const dispatch = useDispatch();
    const isLoader = useSelector(state => getProfileLoading(state))
    const profiles = useSelector(state => getProfiles(state))

    useEffect(() => {
        if (profiles.length <= 0 || isLoader) {
            getProfilesAxiosRequest().then(({data}) => {

                dispatch(getProfilesCreator(data))
                dispatch(createdProfileLoaderCreator(false))
            })
        }

    }, [isLoader])
    return (
        <UserMainWrapper>
            <div>
                {profiles.length >= 0 ? profiles.map((profile, idx) => (
                    <div>
                        <Profile key={idx} profile={profile} />
                    </div>
                )) : null}
                <NewProfile />
            </div>
        </UserMainWrapper>
    )
}

export default Profiles
