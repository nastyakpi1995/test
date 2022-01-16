import React, {useEffect, useRef, useState} from "react";
import {Button, Form, Input} from "antd";
import {loginAxiosRequest} from "../../utils/apiCaller";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {setUserCreator} from "../../redux/reducers/userReducer";
import { ButtonSubmit, ContainerForm, LinkToRegister, MyTitle, SForm} from "../../styles/common";


let Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoader, setIsLoader] = useState(false)
    const inputRef = useRef(null)

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

    useEffect(() => {
        inputRef.current.focus()
    }, [])
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
                    <Input ref={inputRef} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 25 }}>
                    <ButtonSubmit loading={isLoader} htmlType="submit">
                        Sign In
                    </ButtonSubmit>
                </Form.Item>
            </SForm>
        </ContainerForm>
    )
}


export default Login
