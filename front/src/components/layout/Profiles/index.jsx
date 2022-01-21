import React, { useEffect, useState} from "react";
import HeaderWrapper from "../../common/header/HeaderWrapper";
import NewProfile from "./NewProfile";
import ProfileCard from "../../common/ProfileCard";
import {getProfilesAxiosRequest} from "../../../utils/apiCaller";
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {initialProfileValues} from "../../../utils/constants";
import ContainerProfileModal from "./ProfileModal/ContianerProfileModal";

const Profiles = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.user.id)
    const onCreateProfile = () => {
        const prepareActiveProfile = {
            ...initialProfileValues,
            currentUserId: userId
        }
        dispatch(setActiveProfileCreator(prepareActiveProfile))
        dispatch(toggleIsOpenModalCreator())
    }

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
                <NewProfile showModal={onCreateProfile} />
            </ProfilesContainer>
            <ContainerProfileModal />
        </HeaderWrapper>
    )
}

export default Profiles

const ProfilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1800px;
  margin: 0 auto;
`

