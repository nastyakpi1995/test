import React from "react";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const Profile = ({profile, setActiveProfile, setIsVisible}) => {
    const { name, gender, city, birthdate } = profile;

    const OnEditProfile = () => {
        setIsVisible(true)
        setActiveProfile({name, gender, city, birthdate: ''})
    }

    return (
            <Card
                actions={[
                    <EditOutlined onClick={OnEditProfile} key="edit" />,
                    <DeleteOutlined  key="delete" />,
                ]}
                hoverable style={{ width: 300, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
                <p>{name}</p>
                <p>{gender}</p>
                <p>{city}</p>

            </Card>
    )
}

export default Profile
