import React, {useCallback} from "react";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deleteProfileAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import {setActiveProfileCreator, toggleLoaderProfileCreator} from "../../redux/reducers/profileReducer";

const Profile = ({profile, showModal}) => {
    const { name, gender, city, id } = profile;
    const dispatch = useDispatch()

    const OnEditProfile = useCallback(() => {
        showModal()
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
            <Card
                actions={[
                    <EditOutlined onClick={OnEditProfile} key="edit" />,
                    <DeleteOutlined onClick={onDeleteProfile}  key="delete" />,
                ]}
                hoverable style={{ width: 300, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
                <p>{name}</p>
                <p>{gender}</p>
                <p>{city}</p>
            </Card>
    )
}

export default Profile
