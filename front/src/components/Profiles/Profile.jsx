import React from "react";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deleteProfileAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch} from "react-redux";

const Profile = ({profile, setActiveProfile, setIsVisible, setIsLoader}) => {
    const { name, gender, city, birthdate, id } = profile;
    const dispatch = useDispatch()
    const OnEditProfile = () => {
        setIsVisible(true)
        setActiveProfile({name, gender, city, birthdate: '', id })
    }
    const onDeleteProfile = () => {
        deleteProfileAxiosRequest(id).then(data => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                setIsLoader(true)
            }
        })
    }

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
