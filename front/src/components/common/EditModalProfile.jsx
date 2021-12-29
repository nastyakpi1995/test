import React, {useEffect, useState} from "react";
import {DatePicker, Form, Input, Modal, Radio} from "antd";
import {useDispatch} from "react-redux";
import {createProfilesAxiosRequest, editProfileAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";

const EditModalProfile = ({setIsLoader, activeProfile, isVisible, setIsVisible}) => {
    const [confirmLoading, setConfirmLoading] = useState(false)

    const [form] = Form.useForm()
    const dispatch = useDispatch();

    const onDataSuccess = (data) => {
        dispatch(setMessageDataCreator(data))
        if (data.success) {
            setIsLoader(true)
            setIsVisible(false)
            form.setFieldsValue({name: '', gender: 'male', city: '', birthdate: '', id: null})
        }
        setConfirmLoading(false)
    }
    useEffect(() => {
        form.setFieldsValue({name: activeProfile.name, gender: activeProfile.gender, city: activeProfile.city, birthdate: activeProfile.birthdate})
    }, [activeProfile])

    const handleCancel = () => {
        form.setFieldsValue({name: '', gender: 'male', city: '', birthdate: '', id: null})
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
                    <Input value={'54dfdf'} onChange={(e) => {
                        const value = e.target.value;
                        form.setFieldsValue({
                            'name': value
                        })
                    }} />
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
                {/*<Form.Item*/}
                {/*    label="Birthday"*/}
                {/*    name="birthdate"*/}
                {/*    rules={[{ required: true, message: 'Please input your birthdate!' }]}*/}
                {/*>*/}
                {/*    <DatePicker />*/}
                {/*</Form.Item>*/}
            </Form>
        </Modal>
    )
}
export default EditModalProfile
