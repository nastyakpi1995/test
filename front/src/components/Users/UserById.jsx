import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import HeaderWrapper from "../common/HeaderWrapper";
import ProfileCard from "../common/ProfileCard";
import {deleteUserAxiosRequest, getUserDataById} from "../../api/usersApi";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import EditModalUser from "./EditModalUser";
import {initialProfileValues, initialUserValues} from "../../utils/constants";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import styled from "styled-components";
import NewProfile from "../Profiles/NewProfile";

const UserById = () => {
    const {userId} = useParams()
    const [userData, setUserData] = useState({})
    const isLoader = useSelector(state => state.profile.isLoader)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activeUser, setActiveUser] = useState(initialUserValues)

    const dispatch = useDispatch()
    const navigator = useNavigate()
    const fetchGetUserDataById = () => {
        getUserDataById(userId).then(({data}) => {
            setUserData(data.userData)
        })
    }
    useEffect(() => {
        fetchGetUserDataById()
    }, [])

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

    const onEditUser = () => {
        setIsModalVisible(true)
        setActiveUser(userData.user)
    }

    const onDeleteUser = () => {
        deleteUserAxiosRequest(userData.user.id).then(data => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                navigator('/users')
            }
        })
    }

    return (
        <HeaderWrapper>
            <EditModalUser isVisible={isModalVisible}
                           setIsVisible={setIsModalVisible}
                           activeUser={activeUser}
                           setActiveUser={setActiveUser} />
            <WrapUserCard>
                <CardUser hoverable
                          actions={[<EditOutlined onClick={onEditUser} key="edit" />,
                              <DeleteOutlined onClick={onDeleteUser}  key="delete" />]}
                    >
                    <UserInfo>User: {userData.user?.username}</UserInfo>
                    <UserInfo>{userData.user?.email}</UserInfo>
                </CardUser>
            </WrapUserCard>
            <Title>{userData.user?.username} profiles</Title>
            <ProfilesWrap>
                {userData.userProfiles?.length >= 0 ? userData.userProfiles.map((profile, idx) => (
                    <ProfileCard key={idx}
                                 profile={profile}/>
                )) : null}
                <NewProfile showModal={onCreateProfile} />
            </ProfilesWrap>
        </HeaderWrapper>
    )
};

const WrapUserCard = styled.div`
  display: flex;
  justify-content: center;
`;
const CardUser = styled(Card)`
  width: 300px;
  margin: 60px;
  justify-content: center;
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
`
const ProfilesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const UserInfo = styled.p`
    font-size: 16px;
`
export default UserById
