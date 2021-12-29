import React, {useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import { usersAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import User from "./User";
import EditModalUser from "../common/EditModalUser";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [isVisible, setIsVisible] = useState(false)
    const [activeUser, setActiveUser] = useState({username: '', id: null});
    const dispatch = useDispatch()

    useEffect(() => {
        usersAxiosRequest().then(({data}) => {
            setUsers(data.users)
        }).catch(({response}) => {
            dispatch(setMessageDataCreator(response.data))
        })
    }, [])

    return <UserMainWrapper>
        <div style={{display: 'flex', height: '100vh'}}>
            <EditModalUser isVisible={isVisible} setIsVisible={setIsVisible} activeUser={activeUser}/>
            {users ? users.map(user => (
                <User setIsVisible={setIsVisible} setActiveUser={setActiveUser} user={user} />
            )) : null}
        </div>
    </UserMainWrapper>

}

export default Users
