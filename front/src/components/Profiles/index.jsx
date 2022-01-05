import React, {useCallback, useEffect, useState} from "react";
import HeaderWrapper from "../common/HeaderWrapper";
import NewProfile from "./NewProfile";
import Profile from "./Profile";
import {getProfilesAxiosRequest} from "../../api/usersApi";
import {
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

const Profiles = () => {
    const dispatch = useDispatch();
    const toggleIsOpenModal = useCallback(() => dispatch(toggleIsOpenModalCreator()), [])
    const isLoader = useSelector(state => state.profile.isLoader)
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        if (isLoader) {
            getProfilesAxiosRequest().then(({data}) => {
                setProfiles(data)
                dispatch(toggleLoaderProfileCreator())
            })
        }
    }, [isLoader])

    useEffect(() => {
        getProfilesAxiosRequest().then(({data}) => {
            setProfiles(data)
        })
    }, [])

    if (isLoader) return <div>loader</div>

    return (
        <HeaderWrapper>
            <ProfilesContainer>
                {profiles.length >= 0 ? profiles.map((profile, idx) => (
                    <Profile key={idx}
                             profile={profile}/>
                )) : null}
                <NewProfile showModal={toggleIsOpenModal} />
            </ProfilesContainer>
        </HeaderWrapper>
    )
}

const ProfilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Profiles
