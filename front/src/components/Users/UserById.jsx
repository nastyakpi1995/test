import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import HeaderWrapper from "../common/HeaderWrapper";
import Profile from "../Profiles/Profile";
import {deleteUserAxiosRequest, getUserDataById} from "../../api/usersApi";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import EditModalUser from "./EditModalUser";
import {initialUserValues} from "../../utils/helpers";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {toggleLoaderProfileCreator} from "../../redux/reducers/profileReducer";
import styled from "styled-components";

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
        }
    }, [isLoader])

    const onEditUser = () => {
        setIsModalVisible(true)
        setActiveUser(userData.user)
    }

    const onDeleteUser = () => {
        deleteUserAxiosRequest(userData.user.id).then(data => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                dispatch(toggleLoaderProfileCreator())
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
                    <Profile key={idx}
                             profile={profile}/>
                )) : null}
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
