import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from "react-router-dom";
import UserMainWrapper from "../common/UserMainWrapper";
import Profile from "../Profiles/Profile";
import {getUserDataById} from "../../api/usersApi";
import {useSelector} from "react-redux";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import EditModalUser from "./EditModalUser";
import {initialUserValues} from "../../utils/helpers";

const UserById = () => {
    const {userId} = useParams()
    const [userData, setUserData] = useState({})
    const isLoader = useSelector(state => state.profile.isLoader)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activeUser, setActiveUser] = useState(initialUserValues)

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

    }

    return (
        <UserMainWrapper>
            <EditModalUser  isVisible={isModalVisible} setIsVisible={setIsModalVisible} activeUser={activeUser} setActiveUser={setActiveUser} />
            <div>
                <Card
                    actions={[
                        <EditOutlined onClick={onEditUser} key="edit" />,
                        <DeleteOutlined onClick={onDeleteUser}  key="delete" />,
                    ]}
                    hoverable style={{ width: 300, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
                    <p>{userData.user?.username}</p>
                    <p>{userData.user?.email}</p>
                </Card>
            </div>
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
