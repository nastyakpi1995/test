import React, {useCallback} from "react";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deleteProfileAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import styled from "styled-components";

const Profile = ({profile}) => {
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
            <CardProfile hoverable
                         actions={[
                             <EditOutlined onClick={onEditProfile} key="edit" />,
                             <DeleteOutlined onClick={onDeleteProfile}  key="delete" />
                         ]}>
                <CardItem>{name}</CardItem>
                <CardItem>{gender}</CardItem>
                <CardItem>{city}</CardItem>
            </CardProfile>
    )
}

const CardProfile = styled(Card)`
  width: 300px;
  margin: 60px;
  justify-content: center;
  text-align: center;
`
const CardItem = styled.p`
    font-size: 16px;
`
export default Profile
