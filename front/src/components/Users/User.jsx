import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";

const User = ({user}) => {
    const { username, id } = user;

    return (
        <Card hoverable
              style={{ width: 300, height: 150, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
             <Link to={`/user/${id}`}>
                 <p>user: </p>
                 <p>name: {username}</p>
                 <p>id: {id}</p>
             </Link>
        </Card>
    )
}

export default User
