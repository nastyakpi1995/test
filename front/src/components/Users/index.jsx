import React, {useCallback, useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import { usersAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import User from "./User";
import EditModalUser from "./EditModalUser";
import {toggleIsOpenModalCreator} from "../../redux/reducers/profileReducer";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [isLoader, setIsLoader] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [activeUser, setActiveUser] = useState({username: '', id: null, isadmin: false});
    const dispatch = useDispatch()
    const showModal = useCallback(() => dispatch(toggleIsOpenModalCreator()), [])

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

    return <UserMainWrapper>
        <div  style={{display: 'flex', height: '100vh', maxWidth: '1800px', justifyContent: 'space-between'}}>
            <div style={{display: 'flex'}}>
                <EditModalUser setIsLoader={setIsLoader} isVisible={isVisible} setIsVisible={setIsVisible} activeUser={activeUser}/>
                {users ? users.map(user => (
                    <User setIsLoader={setIsLoader} setIsVisible={setIsVisible} setActiveUser={setActiveUser} user={user} />
                )) : null}
            </div>
        </div>
    </UserMainWrapper>

}

export default Users
