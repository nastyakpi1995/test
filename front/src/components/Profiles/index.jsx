import React, {useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import NewProfile from "./NewProfile";
import Profile from "./Profile";
import {getProfilesAxiosRequest} from "../../api/usersApi";
import {getProfilesCreator} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getProfiles} from "../../redux/selects/profile";
import UserProfileModal from "../common/UserProfileModal";
import {initialUserValues} from "../../utils/helpers";

const Profiles = () => {
    const dispatch = useDispatch();
    const [isLoader, setIsLoader] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [activeProfile, setActiveProfile] = useState(initialUserValues)

    const profiles = useSelector(state => getProfiles(state))

    useEffect(() => {
        if (isLoader) {
            getProfilesAxiosRequest().then((data) => {
                dispatch(getProfilesCreator(data?.data))
               setIsLoader(false)
            })
        }
    }, [isLoader])
    useEffect(() => {
        getProfilesAxiosRequest().then((data) => {
            dispatch(getProfilesCreator(data?.data))
        })
    }, [])

    return (
        <UserMainWrapper>
            <UserProfileModal activeProfile={activeProfile}
                              setIsLoader={setIsLoader}
                              isVisible={isVisible}
                              setActiveProfile={setActiveProfile}
                              setIsVisible={setIsVisible}/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {profiles.length >= 0 ? profiles.map((profile, idx) => (
                    <Profile key={idx} profile={profile} setActiveProfile={setActiveProfile} setIsVisible={setIsVisible} setIsLoader={setIsLoader} />
                )) : null}
                <NewProfile setIsVisible={setIsVisible} />
            </div>
        </UserMainWrapper>
    )
}

export default Profiles
