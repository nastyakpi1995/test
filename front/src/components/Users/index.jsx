import React, {useCallback, useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import { usersAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import User from "./User";
import EditModalUser from "./EditModalUser";
import CurrentUserProfiles from "./CurrentUserProfiles";
import {toggleIsOpenModalCreator} from "../../redux/reducers/profileReducer";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [isLoader, setIsLoader] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [activeUser, setActiveUser] = useState({username: '', id: null, isadmin: false});
    const dispatch = useDispatch()
    const showModal = useCallback(() => dispatch(toggleIsOpenModalCreator()), [])

    useEffect(() => {
        if (isLoader) {
            usersAxiosRequest().then(({data}) => {
                setUsers(data.users)
            }).catch(({response}) => {
                dispatch(setMessageDataCreator(response.data))
            })
            setIsLoader(false)
        }
    }, [isLoader])

    useEffect(() => {
        usersAxiosRequest().then(({data}) => {
            setUsers(data.users)
        }).catch(({response}) => {
            dispatch(setMessageDataCreator(response.data))
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
            <CurrentUserProfiles showModal={showModal} />
        </div>
    </UserMainWrapper>

}

export default Users
