import React from "react";
import {Card} from "antd";

const Information = ({name, counts}) => {
    return (
        <Card hoverable style={{ width: 300, height: 300, margin: 60, justifyContent: 'center', textAlign: 'center' }}>
            <div>{name}</div>
            <div>{counts}</div>
        </Card>
    )
}

export default Information
