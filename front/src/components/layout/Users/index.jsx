import React, {useEffect, useState} from "react";
import HeaderWrapper from "../../common/header/HeaderWrapper";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import User from "./User";
import EditModalUser from "./EditModalUser";
import {initialUserValues} from "../../../utils/constants";
import UserByIdProfiles from "./UserByIdProfiles";
import {
    getUsersCreator,
    toggleModalUser,
    userCreator
} from "../../../redux/reducers/userReducer";

const Users = () => {
    const [activeEditUser, setActiveEditUser] = useState(initialUserValues)
    const [chooseUserId, setChooseUserId] = useState(false)
    const dispatch = useDispatch()

    const users = useSelector(state => state.user.users)
    const loadingPutUser = useSelector(state => state.user.loadingPutUser)
    const loadingGetUsers = useSelector(state => state.user.loadingGetUsers)
    const isModalVisible = useSelector(state => state.user.isModalVisible)

    useEffect(() => {
        if (loadingPutUser) {
            dispatch(getUsersCreator())
        }
    }, [loadingPutUser])

    useEffect(() => {
        dispatch(getUsersCreator())
    }, [])

    const onEditUser = (user) => {
        dispatch(toggleModalUser())
        setActiveEditUser(user)
    }

    const onDeleteUser = async (id) => {
        const options = {
            method: 'delete'
        }

        dispatch(userCreator(options, id))
    }

    if (loadingGetUsers) return <div>loader users</div>
    return <HeaderWrapper>
        <EditModalUser isVisible={isModalVisible}
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
