import React, {useEffect, useState} from "react";
import {Checkbox, DatePicker, Form, Input, Modal, Radio} from "antd";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {toggleLoaderProfileCreator} from "../../redux/reducers/profileReducer";
import {initialUserValues} from "../../utils/constants";
import {editUserAxiosRequest} from "../../api/usersApi";

const EditModalUser = ({activeUser, isVisible, setIsVisible, setActiveUser}) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [form] = Form.useForm()
    const dispatch = useDispatch();

    const onDataSuccess = (data) => {
        dispatch(setMessageDataCreator(data))
        if (data.success) {
            dispatch(toggleLoaderProfileCreator())
            setIsVisible(false)
            form.setFieldsValue(initialUserValues)
        }
    }
    useEffect(() => {
        form.setFieldsValue(activeUser)
    }, [activeUser])

    const handleCancel = () => {
        form.setFieldsValue(initialUserValues)
        setIsVisible(false)
        setActiveUser(initialUserValues)
    }

    const onFinish = (values) => {
        setConfirmLoading(true)

        editUserAxiosRequest(values, activeUser.id).then(data => {
            onDataSuccess(data.data)
            dispatch(toggleLoaderProfileCreator())
            setConfirmLoading(false)
        })
    }

    const onOk = () => {
        form.submit()
    }

    return (
        <Modal confirmLoading={confirmLoading} visible={isVisible} onOk={onOk} onCancel={handleCancel}>
            <Form labelCol={{ span: 8 }}
                  name={'user'}
                  initialValues={activeUser}
                  form={form}
                  wrapperCol={{ span: 16 }}
                  onFinish={onFinish}>
                <Form.Item
                    label="User Name"
                    name="username"
                    rules={[{ required: true, message: 'Please input your user name !' }]}
                >
                    <Input onChange={(e) => {
                        const value = e.target.value;
                        form.setFieldsValue({
                            'name': value
                        })
                    }} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your user email !' }]}
                >
                    <Input onChange={(e) => {
                        const value = e.target.value;
                        form.setFieldsValue({
                            'email': value
                        })
                    }} />
                </Form.Item>
                <Form.Item
                    label="Add permitions to admin"
                    name="isadmin"
                    valuePropName="checked"
                    rules={[{ required: false }]}
                >
                    <Checkbox />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditModalUser
