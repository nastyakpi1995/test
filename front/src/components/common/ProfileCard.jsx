import React, {useCallback} from "react";
import {deleteProfileAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import deleteImg from "../../images/icons/DeleteIcon.svg"
import edit from "../../images/icons/editIcon.svg"
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import {CardInfo, CardTitle, CardTop, MyCard} from "../../styles/common";
import styled from "styled-components";
import colors from "../../styles/colors";

const ProfileCard = ({profile}) => {
    const { name, gender, city, id } = profile;
    const dispatch = useDispatch()

    const onEditProfile = useCallback(() => {
        dispatch(toggleIsOpenModalCreator())
        dispatch(setActiveProfileCreator(profile))
    }, [])
    const onDeleteProfile = useCallback(()  => {
        deleteProfileAxiosRequest(id).then(data => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                dispatch(toggleLoaderProfileCreator())
            }
        })
    }, [])

    return (
            <MyCard hoverable>
                <CardTop>
                    <CardTitle>{name}</CardTitle>
                    <CardInfo>{gender}</CardInfo>
                    <CardInfo>{city}</CardInfo>
                </CardTop>
                <CardBottom>
                    <Button onClick={onEditProfile}>
                        edit <img src={edit} alt="edit"/>
                    </Button>
                    <Button  onClick={onDeleteProfile}>
                        delete <img src={deleteImg} alt="delete"/>
                    </Button>
                </CardBottom>
            </MyCard>
    )
}

const Button = styled.button`
  width: 50%;
  padding: 7px 0;
  cursor: pointer;
  border-bottom-right-radius: 14px;
  &:hover {
    background: ${colors.RED};
    color: ${colors.WHITE};
  }
  &:first-child{
    border-right: 1px solid #D6D8E7;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 0;
    &:hover {
      background:${colors.PURPLE};
      color: ${colors.WHITE};
    }
  }
`

export const CardBottom = styled.div`
    border: 1px solid #D6D8E7;
    width: 100%;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`

export default ProfileCard
