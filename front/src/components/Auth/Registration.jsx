import React, {useState} from "react";
import {Form, Checkbox, Input} from "antd";
import {registerAxiosRequest} from "../../api/usersApi";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {ButtonSubmit, ContainerForm, LinkToRegister, MyTitle, SForm} from "../../styles/common";

let Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoader, setIsLoader] = useState(false)

    const onFinish = async (values) => {

        setIsLoader(true)
        registerAxiosRequest(values).then((data) => {
            dispatch(setMessageDataCreator(data))
            setIsLoader(false)
            if (data.success) {
                navigate('/login')
            }
        })
    };

    return (
        <ContainerForm>
            <div>
                <MyTitle>Registration</MyTitle>
                <LinkToRegister to='/login'>You don't have account? login</LinkToRegister>
            </div>
            <SForm
                name="basic"
                className="formAuth"
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
                    <Input />
                </Form.Item>

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

                <Form.Item name="isadmin" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>is Admin</Checkbox>
                </Form.Item>

                <Form.Item type="flex" justify="center">
                    <ButtonSubmit loading={isLoader} className={'btnLogin'} htmlType="submit" >
                        Sign Up
                    </ButtonSubmit>
                </Form.Item>

            </SForm>
        </ContainerForm>
    )
}



export default Registration
