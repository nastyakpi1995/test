import React from "react";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {deleteUserAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {setSelectedByAdminUserIdCreator} from "../../redux/reducers/profileReducer";

const User = ({user, setActiveUser, setIsVisible, setIsLoader}) => {
    const { username, id, isadmin } = user;
    const dispatch = useDispatch()

    const OnEditProfile = () => {
        setIsVisible(true)
        setActiveUser({username, id, isadmin})
    }

    const onClickUser = () => {
        dispatch(setSelectedByAdminUserIdCreator(id))
    }

    const onDeleteProfile = () => {
        deleteUserAxiosRequest(id).then(data => {
            if (data.success) {
                setIsLoader(true)
            }
            dispatch(setMessageDataCreator(data))
        })
    }

    return (
        <Card
            actions={[
                <EditOutlined onClick={OnEditProfile} key="edit" />,
                <DeleteOutlined onClick={onDeleteProfile}  key="delete" />,
            ]}
            hoverable style={{ width: 300, height: 150, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
             <div onClick={onClickUser}>
                 <p>user: </p>
                 <p>name: {username}</p>
                 <p>id: {id}</p>
             </div>

        </Card>
    )
}

export default User
