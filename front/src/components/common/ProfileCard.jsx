import React, {useCallback} from "react";
import {deleteProfileAxiosRequest} from "../../utils/apiCaller";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import deleteImg from "../../images/icons/DeleteIcon.svg"
import edit from "../../images/icons/editIcon.svg"
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import {CardInfo, CardTitle, CardTop, MyCard} from "../../styles/common";
import styled from "styled-components";
import {getTheme} from "../../redux/selects/auth";

const ProfileCardInner = ({profile}) => {
    const { name, gender, birthdate, id } = profile;
    const dispatch = useDispatch()

    const tempTheme = useSelector(state => getTheme(state))

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
            <MyCard hoverable temp={tempTheme}>
                <CardTop>
                    <CardTitle temp={tempTheme}>{name}</CardTitle>
                    <CardInfo temp={tempTheme}>{gender}</CardInfo>
                    <CardInfo temp={tempTheme}>{birthdate}</CardInfo>
                </CardTop>
                <CardBottom>
                    <Button onClick={onEditProfile}>
                        edit <img src={edit} alt="edit"/>
                    </Button>
                    <Button onClick={onDeleteProfile}>delete<img src={deleteImg} alt="delete"/>
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
    background: var(--red);
    color: var(--white2);
  }
  &:first-child{
    border-right: 1px solid var(--white2);
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 0;
    &:hover {
      background: var(--purple);
      color: var(--white);
    }
  }
`

export const CardBottom = styled.div`
    border: 1px solid var(--white2);
    width: 100%;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`

const ProfileCard = React.memo(ProfileCardInner)

export default ProfileCard
