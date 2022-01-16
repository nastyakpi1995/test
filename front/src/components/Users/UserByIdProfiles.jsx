import React, {useState, useEffect} from 'react';
import ProfileCard from "../common/ProfileCard";
import { getUserDataById} from "../../utils/apiCaller";
import {useDispatch, useSelector} from "react-redux";
import {initialProfileValues} from "../../utils/constants";
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import styled from "styled-components";
import NewProfile from "../Profiles/NewProfile";
import ContainerProfileModal from "../Profiles/ProfileModal/ContianerProfileModal";

const UserByIdProfiles = ({userId}) => {
    const [userData, setUserData] = useState({})
    const isLoader = useSelector(state => state.profile.isLoader)

    const dispatch = useDispatch()
    const fetchGetUserDataById = () => {
        getUserDataById(userId).then(({data}) => {
            setUserData(data.userData)
        })
    }
    useEffect(() => {
        fetchGetUserDataById()
    }, [userId])

    useEffect(() => {
        if (isLoader) {
            fetchGetUserDataById()
            dispatch(toggleLoaderProfileCreator())
        }
    }, [isLoader])

    const onCreateProfile = () => {
        const prepareActiveProfile = {
            ...initialProfileValues,
            currentUserId: userId
        }
        dispatch(setActiveProfileCreator(prepareActiveProfile))
        dispatch(toggleIsOpenModalCreator())
    }


    return (
        <SProfiles>
            <ProfilesWrap>
                {userData.userProfiles?.length >= 0 ? userData.userProfiles.map((profile, idx) => (
                    <ProfileCard key={idx}
                                 profile={profile}/>
                )) : null}
                <NewProfile showModal={onCreateProfile} />
            </ProfilesWrap>
            <ContainerProfileModal />
        </SProfiles>
    )
};


const ProfilesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SProfiles = styled.div`
    width: 100%;
`

export default UserByIdProfiles
