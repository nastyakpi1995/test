import React, {useEffect, useState} from "react";
import HeaderWrapper from "../../common/header/HeaderWrapper";
import {deleteUserAxiosRequest} from "../../../utils/apiCaller";
import {setMessageDataCreator} from "../../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import User from "./User";
import EditModalUser from "./EditModalUser";
import {initialUserValues, links, prepareMessageDataFailed} from "../../../utils/constants";
import UserByIdProfiles from "./UserByIdProfiles";
import {getUsersCreator} from "../../../redux/reducers/userReducer";

const Users = () => {
    // const [users, setUsers] = useState(null);
    // const [isLoader, setIsLoader] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activeEditUser, setActiveEditUser] = useState(initialUserValues)
    const [chooseUserId, setChooseUserId] = useState(false)
    const navigator = useNavigate()
    const users = useSelector(state => state.user.users)
    const loadingUser = useSelector(state => state.user.loading)
    const dispatch = useDispatch()
debugger
    useEffect(() => {
        if (loadingUser) {
            dispatch(getUsersCreator())
        }
    }, [loadingUser])

    useEffect(() => {
        dispatch(getUsersCreator())
    }, [])

    const onEditUser = (user) => {
        setIsModalVisible(true)
        setActiveEditUser(user)
    }
    const onDeleteUser = (id) => {
        deleteUserAxiosRequest(id).then(data => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                navigator(links.users)
            }
        })
    }
    return <HeaderWrapper>
        <EditModalUser isVisible={isModalVisible}
                       setIsVisible={setIsModalVisible}
                       activeEditUser={activeEditUser}
                       setActiveEditUser={setActiveEditUser} />
        <UserWrap>
            <UsersContent>
                {users ? users.map((user, index) => (
                    <User key={index}
                          user={user}
                          active={chooseUserId === user.id}
                          onClick={() => setChooseUserId(user.id)}
                          onEditUser={() => onEditUser(user)}
                          onDeleteUser={() => onDeleteUser(user.id)} />
                )) : null}
            </UsersContent>
            {chooseUserId ? <UserByIdProfiles userId={chooseUserId} /> : null}
        </UserWrap>
    </HeaderWrapper>
}

export default Users
const UserWrap = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1800px;
  margin: 0 auto;
`
const UsersContent = styled.div`
  display: flex;
  flex-direction: column;
`
