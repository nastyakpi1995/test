import React, {useEffect} from "react";
import {Form, Checkbox} from "antd";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {ButtonSubmit, ContainerForm, LinkToRegister, MyTitle, SForm, SInput, SInputPassport} from "../../../styles/common";
import {links} from "../../../utils/constants";
import {registerCreator, setIsSuccessRegister} from "../../../redux/reducers/authReducer";

let Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loadingRegister = useSelector((state) => state.auth.loadingRegister)
    const isSuccessRegister = useSelector((state) => state.auth.isSuccessRegister)

    useEffect(() => {
        if (isSuccessRegister) {
            navigate(links.login)
            dispatch(setIsSuccessRegister())
        }
    }, [isSuccessRegister])
    const onFinish = async (values) => {
        dispatch(registerCreator(values))
    };

    return (
        <ContainerForm>
            <div>
                <MyTitle>Registration</MyTitle>
                <LinkToRegister to={links.login}>You don't have account? login</LinkToRegister>
            </div>
            <SForm
                name="basic"
                layout="vertical"
                initialValues={{ isadmin: false }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <SInput />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <SInput />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <SInputPassport />
                </Form.Item>

                <Form.Item name="isadmin" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>is Admin</Checkbox>
                </Form.Item>

                <Form.Item type="flex" justify="center">
                    <ButtonSubmit loading={loadingRegister} className={'btnLogin'} htmlType="submit" >
                        Sign Up
                    </ButtonSubmit>
                </Form.Item>

            </SForm>
        </ContainerForm>
    )
}

export default Registration
