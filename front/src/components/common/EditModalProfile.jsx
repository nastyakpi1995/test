import React, {useState} from "react";
import {DatePicker, Form, Input, Modal, Radio} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getIsShowModal} from "../../redux/selects/showModal";
import {toggleEditModalCreator} from "../../redux/reducers/modalReducer";
import {createProfilesAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";

const EditModalProfile = () => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const isVisible = useSelector(state => getIsShowModal(state))
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const handleCancel = () => {
        form.resetFields()
        dispatch(toggleEditModalCreator())
    }
    const onFinish = (values) => {
        const prepareValues = {
            ...values,
            birthdate: values.birthdate._d
        }
        setConfirmLoading(true)
        createProfilesAxiosRequest(prepareValues).then(data => {
            dispatch(setMessageDataCreator(data))
            if (data.success) {
                dispatch(toggleEditModalCreator())
            }
            setConfirmLoading(false)
        })
    }

    return (
        <Modal confirmLoading={confirmLoading} visible={isVisible} onOk={form.submit} onCancel={handleCancel}>
            <Form labelCol={{ span: 8 }}
                  form={form}
                  wrapperCol={{ span: 16 }}
                  initialValues={{gender: 'female'}}
                  onFinish={onFinish}>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
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
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Birthday"
                    name="birthdate"
                    rules={[{ required: false, message: 'Please input your name!' }]}
                >
                    <DatePicker />
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default EditModalProfile