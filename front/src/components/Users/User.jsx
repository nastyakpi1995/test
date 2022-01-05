import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";
import styled from "styled-components";

const User = ({user}) => {
    const { username, id } = user;

    return (
        <MyCard hoverable>
             <Link to={`/user/${id}`}>
                 <UserInfo>user: </UserInfo>
                 <UserInfo>name: {username}</UserInfo>
                 <UserInfo>id: {id}</UserInfo>
             </Link>
        </MyCard>
    )
}
const MyCard = styled(Card)`
  width: 300px;
  height: 150px;
  margin: 60px;
  justify-content: center;
  text-align: center
`
const UserInfo = styled.p`
    font-size: 16px;
`

export default User
