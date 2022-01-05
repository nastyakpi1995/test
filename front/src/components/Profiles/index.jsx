import React, {useCallback, useEffect, useState} from "react";
import HeaderWrapper from "../common/HeaderWrapper";
import NewProfile from "./NewProfile";
import ProfileCard from "../common/ProfileCard";
import {getProfilesAxiosRequest} from "../../api/usersApi";
import {
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Col, Row} from "antd";

const Profiles = () => {
    const dispatch = useDispatch();
    const toggleIsOpenModal = () => dispatch(toggleIsOpenModalCreator())

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
                    <ProfileCard key={idx} profile={profile}/>
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
