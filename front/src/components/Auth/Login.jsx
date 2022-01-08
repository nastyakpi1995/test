import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import {loginAxiosRequest} from "../../api/usersApi";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {setUserCreator} from "../../redux/reducers/userReducer";
import styled from "styled-components";
import colors from "../../styles/colors";
import Title from "antd/es/typography/Title";
import {ButtonAuth, ContainerForm, LinkToRegister, MyTitle, SForm} from "../../styles/common";


let Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoader, setIsLoader] = useState(false)

    const onFinish = (values) => {
        setIsLoader(true)
        loginAxiosRequest(values).then(data => {
            setIsLoader(false)

            dispatch(setMessageDataCreator(data))
            if (data?.success) {
                dispatch(setUserCreator(data.user))
                navigate('/profiles')
            }
        })
    };

    return (
        <ContainerForm>
            <div>
                <MyTitle>Sign in</MyTitle>
                <LinkToRegister to='/registration'>You don't have account? Registration</LinkToRegister>
            </div>
            <SForm
                name="login"
                className='formAuth'
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
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
                <Form.Item wrapperCol={{ offset: 25 }}>
                    <ButtonAuth loading={isLoader} htmlType="submit">
                        Sign Inm
                    </ButtonAuth>
                </Form.Item>
            </SForm>
        </ContainerForm>
    )
}





export default Login
