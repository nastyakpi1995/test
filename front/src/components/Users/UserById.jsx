import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from "react-router-dom";
import UserMainWrapper from "../common/UserMainWrapper";
import Profile from "../Profiles/Profile";
import {getUserDataById} from "../../api/usersApi";
import {useSelector} from "react-redux";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import EditModalUser from "./EditModalUser";
import {toggleIsOpenModalCreator} from "../../redux/reducers/profileReducer";

const UserById = () => {
    const {userId} = useParams()
    const [userData, setUserData] = useState({})
    const isLoader = useSelector(state => state.profile.isLoader)


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
        // editUserAxiosRequest(userData.user.id)
    }

    const onDeleteUser = () => {

    }

    return (
        <UserMainWrapper>
            {/*<EditModalUser setIsLoader={setIsLoader} isVisible={isVisible} setIsVisible={setIsVisible} activeUser={activeUser}/>*/}
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
