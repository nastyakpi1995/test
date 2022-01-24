import React, {useEffect, useRef} from "react";
import { Form } from "antd";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ButtonSubmit, ContainerForm, LinkToRegister, MyTitle, SForm, SInput, SInputPassport} from "../../../styles/common";
import {links} from "../../../utils/constants";
import {loginCreator, setIsSuccessLogin} from "../../../redux/reducers/authReducer";

let Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef(null)
    const loadingLogin = useSelector((state) => state.auth.loadingLogin)
    const isSuccessLogin = useSelector((state) => state.auth.isSuccessLogin)

    useEffect(() => {
        if (isSuccessLogin) {
            navigate(links.profiles)
            dispatch(setIsSuccessLogin())
        }
    }, [isSuccessLogin])

    const onFinish = (values) => {
        dispatch(loginCreator(values))
    };

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <ContainerForm>
            <div>
                <MyTitle>Sign in</MyTitle>
                <LinkToRegister to={links.registration}>You don't have account? Registration</LinkToRegister>
            </div>
            <SForm
                name="login"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <SInput ref={inputRef} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <SInputPassport />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 25 }}>
                    <ButtonSubmit loading={loadingLogin} htmlType="submit">
                        Sign In
                    </ButtonSubmit>
                </Form.Item>
            </SForm>
        </ContainerForm>
    )
}
export default Login
