import React, {useEffect, useState} from "react";
import {DatePicker, Form, Input, Modal, Radio} from "antd";
import {useDispatch} from "react-redux";
import {createProfilesAxiosRequest, editProfileAxiosRequest, editUserAxiosRequest} from "../../api/usersApi";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";

const EditModalUser = ({activeUser, isVisible, setIsVisible}) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [form] = Form.useForm()
    const dispatch = useDispatch();

    const onDataSuccess = (data) => {
        dispatch(setMessageDataCreator(data))
        if (data.success) {
            setIsVisible(false)
            form.setFieldsValue({username: '', id: null})
        }
    }
    useEffect(() => {
        form.setFieldsValue({username: activeUser.username})
    }, [activeUser])

    const handleCancel = () => {
        form.setFieldsValue({name: '', id: null})
        setIsVisible(false)
    }

    const onFinish = (values) => {
        setConfirmLoading(true)

        editUserAxiosRequest(values, values.id).then(data => {
                onDataSuccess(data)
            })
    }

    const onOk = () => {
        form.submit()
    }

    return (
        <Modal confirmLoading={confirmLoading} visible={isVisible} onOk={onOk} onCancel={handleCancel}>
            <Form labelCol={{ span: 8 }}
                  name={'user'}
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
            </Form>
        </Modal>
    )
}

export default EditModalUser
