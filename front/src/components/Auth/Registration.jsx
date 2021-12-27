import React, {useState} from "react";
import {Button, Form, Checkbox, Input} from "antd";
import {registerAxiosRequest} from "../../api/usersApi";
import {NavLink} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/authReducer";

let Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        const prepareValues = {
            ...values,
            isadmin: values.isadmin || false
        }

        registerAxiosRequest(prepareValues).then(({data}) => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                navigate('/login')
            }
        }).catch(({response}) => {
            if (response.data) {
                dispatch(setMessageDataCreator(response.data))
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{paddingTop: 100}}>
            <div style={{textAlign: 'center', marginBottom:15}}>
                <div style={{fontSize: 20, marginBottom:15}}>Registration</div>
                <NavLink style={{ fontSize: 20}} to='/login'>You have account? Login</NavLink>
            </div>
        <Form
            name="registration"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 4 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item label='userName' name={'username'}  rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="isadmin" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Is admin</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}



export default Registration
