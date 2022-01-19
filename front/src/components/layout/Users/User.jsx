import React from "react";
import styled from "styled-components";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {getTheme} from "../../../redux/selects/auth";
import {theme} from "../../../styles/theme";

const User = ({user, onEditUser, onDeleteUser, onClick, active}) => {
    const { username, email } = user;
    const tempTheme = useSelector((state) => getTheme(state))

    return (
        <MyCard onClick={onClick} active={active} temp={tempTheme}>
            <Info>
                <UserName temp={tempTheme}>{username}</UserName>
                <UserEmail temp={tempTheme}>{email}</UserEmail>
            </Info>
            <Actions>
                <SButton temp={tempTheme}>
                    <EditOutlined onClick={onEditUser} key="edit" />
                </SButton>
                <SButton temp={tempTheme}>
                    <DeleteOutlined onClick={onDeleteUser}  key="delete" />
                </SButton>
            </Actions>
        </MyCard>
    )
}
const MyCard = styled.div`
  width: 350px;
  padding-left: 10px;
  background: var(${({temp}) => theme[temp].container});
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding-right: 10px;
  border: 4px solid var(${({active, temp}) => (active ? theme[temp].title : '--transparent')});
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
    color: var(${({temp}) => theme[temp].white});
  }
`

const UserName = styled.p`
  font-size: 18px;
  color: var(${({temp}) => theme[temp].white});
`
const UserEmail = styled.p`
  font-size: 16px;
  color: var(${({temp}) => theme[temp].white});
`

export default User
