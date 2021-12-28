import React from "react";
import {Button, Form, Input} from "antd";
import {loginAxiosRequest} from "../../api/usersApi";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";

let Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = (values) => {
        loginAxiosRequest(values).then(data => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                navigate('/profiles')
            }
        })
    };


    return (
        <div style={{paddingTop: 100}}>
            <div style={{textAlign: 'center', marginBottom:15}}>
                <div style={{fontSize: 20, marginBottom:15}}>Login</div>
                <NavLink style={{ fontSize: 20}} to='/registration'>You don't have account? Registration</NavLink>
            </div>

            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 4 }}
            onFinish={onFinish}
            autoComplete="off"
            style={{paddingTop: 100}}
        >
            <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: 'Please input your username!' }]}
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

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}



export default Login
