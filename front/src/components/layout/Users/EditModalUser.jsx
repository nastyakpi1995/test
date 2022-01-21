import React, {useEffect, useState} from "react";
import {Checkbox, Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setMessageDataCreator} from "../../../redux/reducers/authReducer";
import {toggleLoaderProfileCreator} from "../../../redux/reducers/profileReducer";
import {initialUserValues} from "../../../utils/constants";
import {editUserAxiosRequest} from "../../../utils/apiCaller";
import Drawer from "../../common/Drawer";
import {ButtonSubmit, SFormItemModal, SFormModal, SInputModal, STitleModal} from "../../../styles/common";
import styled from "styled-components";
import {getTheme} from "../../../redux/selects/auth";

const EditModalUser = ({activeEditUser, isVisible, setIsVisible, setActiveEditUser}) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [form] = Form.useForm()
    const dispatch = useDispatch();
    const tempTheme = useSelector(state => getTheme(state))

    const onDataSuccess = (data) => {
        dispatch(setMessageDataCreator(data))
        if (data.success) {
            dispatch(toggleLoaderProfileCreator())
            setIsVisible(false)
            form.setFieldsValue(initialUserValues)
        }
    }
    useEffect(() => {
        form.setFieldsValue(activeEditUser)
    }, [activeEditUser])

    const handleCancel = () => {
        form.setFieldsValue(initialUserValues)
        setIsVisible(false)
        setActiveEditUser(initialUserValues)
    }

    const onFinish = (values) => {
        setConfirmLoading(true)

        editUserAxiosRequest(values, activeEditUser.id).then(data => {
            onDataSuccess(data.data)
            dispatch(toggleLoaderProfileCreator())
            setConfirmLoading(false)
        })
    }

    return (
        <Drawer visible={isVisible}  onClose={handleCancel}>
            <STitleModal temp={tempTheme}>Edit {activeEditUser.username} profile</STitleModal>
            <SFormModal name={'user'}
                  initialValues={activeEditUser}
                  form={form}
                  wrapperCol={{ span: 16 }}
                  onFinish={onFinish}>
                <SFormItem
                    temp={tempTheme}
                    label="User Name"
                    name="username"
                    rules={[{ required: true, message: 'Please input your user name !' }]}
                >
                    <SInputModal onChange={(e) => {
                        const value = e.target.value;
                        form.setFieldsValue({
                            'name': value
                        })
                    }} />
                </SFormItem>
                <SFormItem
                    temp={tempTheme}
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your user email !' }]}
                >
                    <SInputModal onChange={(e) => {
                        const value = e.target.value;
                        form.setFieldsValue({
                            'email': value
                        })
                    }} />
                </SFormItem>
                <SFormItem
                    temp={tempTheme}
                    label="Add permitions to admin"
                    name="isadmin"
                    valuePropName="checked"
                    rules={[{ required: false }]}
                >
                    <Checkbox />
                </SFormItem>
                <SFormItem temp={tempTheme}>
                    <ButtonSubmit loading={confirmLoading} htmlType='submit'>
                        Submit
                    </ButtonSubmit>
                </SFormItem>
            </SFormModal>
        </Drawer>
    )
}

const SFormItem = styled(SFormItemModal)`
  label {
    width: 230px !important;
  }
`
export default EditModalUser
