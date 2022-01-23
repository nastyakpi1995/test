import React, {useEffect, useCallback} from 'react';
import ProfileCard from "../../common/ProfileCard";
import {useDispatch, useSelector} from "react-redux";
import {initialProfileValues} from "../../../utils/constants";
import {
    getUserDataByIdCreator,
    setActiveProfileCreator,
    setIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../../redux/reducers/profileReducer";
import styled from "styled-components";
import NewProfile from "../Profiles/NewProfile";
import ContainerProfileModal from "../Profiles/ProfileModal/ContianerProfileModal";

const UserByIdProfiles = ({userId}) => {
    const loadingProfile = useSelector(state => state.profile.loadingProfile)
    const userDataById = useSelector(state => state.profile.userDataById)

    const dispatch = useDispatch()
    const fetchGetUserDataById = () => {
        dispatch(getUserDataByIdCreator(userId))
    }
    useEffect(() => {
        fetchGetUserDataById()
    }, [userId])

    useEffect(() => {
        if (loadingProfile) {
            fetchGetUserDataById()
            dispatch(toggleLoaderProfileCreator())
        }
    }, [loadingProfile])

    const onCreateProfile = useCallback(() => {
        const prepareActiveProfile = {
            ...initialProfileValues,
            currentUserId: userId
        }
        dispatch(setActiveProfileCreator(prepareActiveProfile))
        dispatch(setIsOpenModalCreator(true))
    }, [dispatch])


    return (
        <SProfiles>
            <ProfilesWrap>
                {userDataById.userProfiles?.length >= 0 ? userDataById.userProfiles.map((profile, idx) => (
                    <ProfileCard key={idx} profile={profile}/>
                )) : null}
                <NewProfile showModal={onCreateProfile} />
            </ProfilesWrap>
            <ContainerProfileModal />
        </SProfiles>
    )
};

export default UserByIdProfiles;
const ProfilesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SProfiles = styled.div`
  width: 100%;
  margin-left: 15px;
`

