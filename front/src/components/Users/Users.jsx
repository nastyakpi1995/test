import React, { useState} from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination";
const Users = ({users, followLoaderArray, toggleFollowUserThunkCreator, dispatch}) => {
    const [startArray, setStartArray] = useState(0)


    const followUserClick = (id) => {
        dispatch(toggleFollowUserThunkCreator(id))
    }

    return (
        <div>
            <Pagination setStartArray={setStartArray} users={users} />
            {users.slice(startArray, startArray + 3).map((user) => (
                <div key={user.id}>
                    <NavLink to={`/profile/${user.id}`} >
                        <div className={s.image}>
                            <img src={user.img} alt=""/>
                        </div>
                    </NavLink>
                    <div>
                        {user.isFollow ? <button disabled={followLoaderArray.some(el => user.id === el)} onClick={() => followUserClick(user.id)}>unfollow</button> : <button onClick={() => followUserClick(user.id)}>follow</button>}
                    </div>
                    <div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Users
