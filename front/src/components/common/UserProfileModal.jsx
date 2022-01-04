import React, {useCallback, useEffect, useState} from "react";
import {DatePicker, Form, Input, Modal, Radio} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {createProfilesAxiosRequest, editProfileAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {initialUserValues} from "../../utils/helpers";
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";

const UserProfileModal = () => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const isOpenModalProfile = useSelector(state => state.profile.isOpenModalProfile)
    const activeProfile = useSelector(state => state.profile.activeProfile)

    const [form] = Form.useForm()
    const dispatch = useDispatch();

    const onDataSuccess = useCallback((data) => {
        dispatch(setMessageDataCreator(data))
        if (data.success) {
            dispatch(toggleIsOpenModalCreator())
            dispatch(toggleLoaderProfileCreator())
            dispatch(setActiveProfileCreator(initialUserValues))
            form.setFieldsValue(activeProfile)
        }
        setConfirmLoading(false)
    }, [])

    useEffect(() => {
        if (activeProfile) {
            form.setFieldsValue(activeProfile)
        }
    }, [activeProfile])

    const handleCancel = useCallback(() => {
        dispatch(setActiveProfileCreator(initialUserValues))
        form.setFieldsValue(activeProfile)
        dispatch(toggleIsOpenModalCreator())
    }, [])

    const applyUserAction = (onActionFunction, values) => {
        onActionFunction(values).then(data => {
            onDataSuccess(data)
        })
    }
    const onFinish = (values) => {
        const prepareValues = {
            ...values,
            // birthdate: values.birthdate._d
        }
        setConfirmLoading(true)

        if (!activeProfile.id) {
            applyUserAction(createProfilesAxiosRequest, prepareValues)
        } else {
            const prepareData = {
                ...prepareValues,
                id: activeProfile.id
            }
            applyUserAction(editProfileAxiosRequest, prepareData)
        }
    }

    const onOk = () => {
        form.submit()
    }

    return (
        <Modal confirmLoading={confirmLoading} visible={isOpenModalProfile} onOk={onOk} onCancel={handleCancel}>
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
export default UserProfileModal
