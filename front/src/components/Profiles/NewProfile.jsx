import React from "react";
import {Card} from "antd";
import {
    PlusCircleOutlined
} from '@ant-design/icons';

const NewProfile = ({setIsVisible}) => {
    const showModal = () => {
        setIsVisible(true)
    }

    return (
        <Card style={{
            width: 300,
            height: 300,
            margin: 20, display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center' }}>
            <div style={{cursor: 'pointer'}} onClick={showModal}>
                <PlusCircleOutlined style={{ fontSize: '46px', color: '#08c', marginBottom: 10 }} />
                <p>Create New Profile</p>
            </div>

        </Card>
    )
}

export default NewProfile
