import React, { useEffect} from "react";
import HeaderWrapper from "../../common/header/HeaderWrapper";
import NewProfile from "./NewProfile";
import ProfileCard from "../../common/ProfileCard";
import {
    getProfilesCreator,
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
} from "../../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {initialProfileValues} from "../../../utils/constants";
import ContainerProfileModal from "./ProfileModal/ContianerProfileModal";

const Profiles = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.user.user.id)
    const profiles = useSelector((state) => state.profile.profiles)
    const loadingGetProfiles = useSelector(state => state.profile.loadingGetProfiles)
    const loadingProfile = useSelector(state => state.profile.loadingProfile)

    const onCreateProfile = () => {
        const prepareActiveProfile = {
            ...initialProfileValues,
            currentUserId: userId
        }
        dispatch(setActiveProfileCreator(prepareActiveProfile))
        dispatch(toggleIsOpenModalCreator())
    }

    useEffect(() => {
        if (loadingProfile) {
            dispatch(getProfilesCreator())
        }
    }, [loadingProfile])

    useEffect(() => {
        dispatch(getProfilesCreator())
    }, [])

    if (loadingGetProfiles) return <div>loader</div>

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

