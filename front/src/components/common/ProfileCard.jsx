import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import deleteImg from "../../images/icons/DeleteIcon.svg"
import deleteImgWhiteIcon from "../../images/icons/deleteImgWhiteIcon.svg"
import edit from "../../images/icons/editIcon.svg"
import editWhiteIcon from "../../images/icons/editWhiteIcon.svg"
import {
    profileCreator,
    setActiveProfileCreator,
    setIsOpenModalCreator,
} from "../../redux/reducers/profileReducer";
import {CardInfo, CardTitle, CardTop, MyCard} from "../../styles/common";
import styled from "styled-components";
import {getTheme} from "../../redux/selects/auth";
import {theme} from "../../styles/theme";
import {buttonDataExample} from "../../utils/constants";

const ProfileCardInner = ({profile}) => {
    const { name, gender, birthdate, id } = profile;
    const dispatch = useDispatch()

    const tempTheme = useSelector(state => getTheme(state))

    const onEditProfile = useCallback(() => {
        dispatch(setIsOpenModalCreator(true))
        dispatch(setActiveProfileCreator(profile))
    }, [])


    const onDeleteProfile = useCallback(()  => {
        const prepareValues = {
            id,
            method: 'delete',
            url: 'delete'
        }

        dispatch(profileCreator(prepareValues))
    }, [])


    return (
            <MyCard hoverable temp={tempTheme}>
                <CardTop>
                    <CardTitle temp={tempTheme}>{name}</CardTitle>
                    <CardInfo temp={tempTheme}>{gender}</CardInfo>
                    <CardInfo temp={tempTheme}>{birthdate}</CardInfo>
                </CardTop>
                <CardBottom>
                    {buttonDataExample(tempTheme, onDeleteProfile, onEditProfile).map(el => (
                        <Button key={el.id} onClick={el.onClick} tempTheme={tempTheme}>{el.title}
                            <img src={el.icon} alt={el.title}/>
                        </Button>
                    ))}
                </CardBottom>
            </MyCard>
    )
}

const ProfileCard = React.memo(ProfileCardInner)

export default ProfileCard

const Button = styled.button`
  width: 50%;
  padding: 7px 0;
  cursor: pointer;
  border-bottom-right-radius: 14px;
  color: var(${({tempTheme}) => theme[tempTheme].background2});
  img {
    margin-left: 10px;
  }
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
