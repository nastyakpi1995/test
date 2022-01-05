import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import {loginAxiosRequest} from "../../api/usersApi";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {setUserCreator} from "../../redux/reducers/userReducer";
import styled from "styled-components";

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
        <LoginContainer>
            <LoginNavContainer>
                <Title>Login</Title>
                <LinkRegister to='/registration'>You don't have account? Registration</LinkRegister>
            </LoginNavContainer>
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 4 }}
            onFinish={onFinish}
            autoComplete="off"
            style={{paddingTop: 100}}>
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
                <Button loading={isLoader} type="primary" htmlType="submit" >
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
  padding-top: 100px
`
const LoginNavContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`
const LinkRegister = styled(Link)`
  font-size: 20px;
`


export default Login
