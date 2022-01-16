import React, {useEffect, useState} from "react";
import HeaderWrapper from "../common/header/HeaderWrapper";
import { usersAxiosRequest} from "../../utils/apiCaller";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import User from "./User";
import styled from "styled-components";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [isLoader, setIsLoader] = useState(false)
    const dispatch = useDispatch()

    const prepareMessageDataFailed = {
        isVisible: true,
        message: 'you server not start',
        success: false
    }
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

    return <HeaderWrapper>
        <UserWrap>
            <UsersContent>
                {users ? users.map((user, index) => (
                    <User key={index} user={user} />
                )) : null}
            </UsersContent>
        </UserWrap>
    </HeaderWrapper>
}

const UserWrap = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1800px;
  justify-content: space-between;
`
const UsersContent = styled.div`
  display: flex;
`

export default Users
