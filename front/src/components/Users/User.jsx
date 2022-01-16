import React from "react";
import {Card} from "antd";
import {Link} from "react-router-dom";
import styled from "styled-components";

const User = ({user}) => {
    const { username, email, id } = user;

    return (
        <MyCard hoverable>
             <Link to={`/user/${id}`}>
                 <UserInfo>{username}</UserInfo>
                 <UserInfo>{email}</UserInfo>
             </Link>
        </MyCard>
    )
}
const MyCard = styled(Card)`
  width: 300px;
  height: 150px;
  margin: 10px;
  justify-content: center;
  text-align: center;
  
`
const UserInfo = styled.p`
    font-size: 18px;
  color: var(--title);
`

export default User
