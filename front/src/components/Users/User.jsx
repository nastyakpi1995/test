import React from "react";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";

const User = ({user, setActiveUser, setIsVisible}) => {
    const { username, id, isadmin } = user;
    const dispatch = useDispatch()

    const OnEditProfile = () => {
        setIsVisible(true)
        setActiveUser({username, id, isadmin})
    }

    const onDeleteProfile = () => {

    }

    return (
        <Card
            actions={[
                <EditOutlined onClick={OnEditProfile} key="edit" />,
                <DeleteOutlined onClick={onDeleteProfile}  key="delete" />,
            ]}
            hoverable style={{ width: 300, height: 150, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
            <p>user: </p>
            <p>name: {username}</p>
            <p>id: {id}</p>
            {/*<p>{city}</p>*/}
        </Card>
    )
}

export default User
