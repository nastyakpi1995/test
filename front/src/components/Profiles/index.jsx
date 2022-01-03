import React, {useCallback, useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import NewProfile from "./NewProfile";
import Profile from "./Profile";
import {getProfilesAxiosRequest} from "../../api/usersApi";
import {
    getProfilesCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getProfiles} from "../../redux/selects/profile";

const Profiles = () => {
    const dispatch = useDispatch();
    const profiles = useSelector(state => getProfiles(state))
    const toggleIsOpenModal = useCallback(() => dispatch(toggleIsOpenModalCreator()), [])
    const isLoader = useSelector(state => state.profile.isLoader)

    useEffect(() => {
        if (isLoader) {
            getProfilesAxiosRequest().then((data) => {
                dispatch(getProfilesCreator(data?.data))
                dispatch(toggleLoaderProfileCreator())
            })
        }
    }, [isLoader])

    useEffect(() => {
        getProfilesAxiosRequest().then((data) => {
            dispatch(getProfilesCreator(data?.data))
        })
    }, [])

    if (isLoader) return <div>loader</div>

    return (
        <UserMainWrapper>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {profiles.length >= 0 ? profiles.map((profile, idx) => (
                    <Profile key={idx}
                             profile={profile}
                             showModal={toggleIsOpenModal}/>
                )) : null}
                <NewProfile showModal={toggleIsOpenModal} />
            </div>
        </UserMainWrapper>
    )
}

export default Profiles
