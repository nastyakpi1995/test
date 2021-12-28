import React, {useEffect} from "react";
import {Card} from "antd";

const Profile = (props) => {
    const { name, gender } = props.profile;

    debugger
    return (
            <Card style={{ width: 300 }}>
                <p>{name}</p>
                <p>{gender}</p>
                <p>Card content</p>
            </Card>
    )
}

export default Profile
