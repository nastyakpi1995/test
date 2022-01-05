import React, {useState, useEffect, useCallback} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import UserMainWrapper from "../common/UserMainWrapper";
import Profile from "../Profiles/Profile";
import {deleteUserAxiosRequest, getUserDataById} from "../../api/usersApi";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import EditModalUser from "./EditModalUser";
import {initialUserValues} from "../../utils/helpers";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {toggleLoaderProfileCreator} from "../../redux/reducers/profileReducer";

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
            }
        })
        navigator('/users')
    }

    return (
        <UserMainWrapper>
            <EditModalUser  isVisible={isModalVisible} setIsVisible={setIsModalVisible} activeUser={activeUser} setActiveUser={setActiveUser} />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card
                    actions={[
                        <EditOutlined onClick={onEditUser} key="edit" />,
                        <DeleteOutlined onClick={onDeleteUser}  key="delete" />,
                    ]}
                    hoverable style={{ width: 300, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
                    <p>User: {userData.user?.username}</p>
                    <p>{userData.user?.email}</p>
                </Card>
            </div>
            <h1 style={{textAlign: 'center'}}>{userData.user?.username} profiles</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {userData.userProfiles?.length >= 0 ? userData.userProfiles.map((profile, idx) => (
                    <Profile key={idx}
                             profile={profile}/>
                )) : null}
            </div>
        </UserMainWrapper>
    )
};

export default UserById
