import React, {useEffect, useState} from "react";
import HeaderWrapper from "../../common/header/HeaderWrapper";
import {deleteUserAxiosRequest, usersAxiosRequest} from "../../../utils/apiCaller";
import {setMessageDataCreator} from "../../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import User from "./User";
import EditModalUser from "./EditModalUser";
import {initialUserValues, links, prepareMessageDataFailed} from "../../../utils/constants";
import UserByIdProfiles from "./UserByIdProfiles";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [isLoader, setIsLoader] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [activeEditUser, setActiveEditUser] = useState(initialUserValues)
    const [chooseUserId, setChooseUserId] = useState(false)
    const navigator = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoader) {
            usersAxiosRequest().then(({data}) => {
                setUsers(data.users)
            }).catch((data) => {
                dispatch(setMessageDataCreator(prepareMessageDataFailed))
            })
            setIsLoader(false)
        }
    }, [isLoader])

    useEffect(() => {
        usersAxiosRequest().then(({data}) => {
            setUsers(data.users)
        }).catch((data) => {
            dispatch(setMessageDataCreator(prepareMessageDataFailed))
        })
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

export default Users
