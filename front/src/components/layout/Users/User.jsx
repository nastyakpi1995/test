import React from "react";
import styled from "styled-components";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const User = ({user, onEditUser, onDeleteUser, onClick, active}) => {
    const { username, email } = user;

    return (
        <MyCard onClick={onClick} active={active}>
            <Info>
                <UserName>{username}</UserName>
                <UserEmail>{email}</UserEmail>
            </Info>
            <Actions>
                <SButton>
                    <EditOutlined onClick={onEditUser} key="edit" />
                </SButton>
                <SButton>
                    <DeleteOutlined onClick={onDeleteUser}  key="delete" />
                </SButton>
            </Actions>
        </MyCard>
    )
}
const MyCard = styled.div`
  width: 350px;
  padding-left: 10px;
  background: var(--container);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding-right: 10px;
  border: ${(props) => (props.active ? '4px solid var(--title)' : '4px solid var(--transparent)')}
`

const Info = styled.div``
const Actions = styled.div`
  display: flex;
  align-items: center;
`
const SButton = styled.div`
  margin-left: 15px;
  svg {
    object-fit: cover;
    width: 25px;
    height: 25px;
    color: var(--white);
  }
`

const UserName = styled.p`
  font-size: 18px;
  color: var(--white);
`
const UserEmail = styled.p`
  font-size: 16px;
  color: var(--white1);
`

export default User
