import React, {useEffect, useState} from "react";
import {DatePicker, Form, Input, Modal, Radio} from "antd";
import {useDispatch} from "react-redux";
import {createProfilesAxiosRequest, editProfileAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {initialUserValues} from "../../utils/helpers";

const UserProfileModal = ({setIsLoader, activeProfile, isVisible, setIsVisible, setActiveProfile}) => {
    const [confirmLoading, setConfirmLoading] = useState(false)

    const [form] = Form.useForm()
    const dispatch = useDispatch();

    const onDataSuccess = (data) => {
        dispatch(setMessageDataCreator(data))
        if (data.success) {
            setIsLoader(true)
            setIsVisible(false)
            setActiveProfile(initialUserValues)
            form.setFieldsValue({initialUserValues})
        }
        setConfirmLoading(false)
    }
    useEffect(() => {
        form.setFieldsValue(activeProfile)
    }, [activeProfile])

    const handleCancel = () => {
        setActiveProfile(initialUserValues)
        form.setFieldsValue(initialUserValues)
        setIsVisible(false)
    }

    const onFinish = (values) => {
        const prepareValues = {
            ...values,
            // birthdate: values.birthdate._d
        }
        setConfirmLoading(true)

        if (!activeProfile.id) {
            createProfilesAxiosRequest(prepareValues).then(data => {
                onDataSuccess(data)
            })
        } else {
            editProfileAxiosRequest(prepareValues, activeProfile.id).then(data => {
                onDataSuccess(data)
            })
        }
    }

    const onOk = () => {
        form.submit()
    }

    return (
        <Modal confirmLoading={confirmLoading} visible={isVisible} onOk={onOk} onCancel={handleCancel}>
            <Form labelCol={{ span: 8 }}
                  form={form}
                  wrapperCol={{ span: 16 }}
                  initialValues={activeProfile}
                  onFinish={onFinish}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input
                        onChange={(e) => {
                            const value = e.target.value;
                            form.setFieldsValue({'name': value})
                        }}
                    />
                </Form.Item>

                <Form.Item label='gender' name={'gender'}>
                    <Radio.Group>
                        <Radio checked value={'male'}>male</Radio>
                        <Radio value={'female'}>female</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your city!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Birthday"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please input your birthdate!' }]}
                >
                    <DatePicker />
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default UserProfileModal
