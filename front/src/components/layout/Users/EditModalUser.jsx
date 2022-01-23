import React, {useEffect} from "react";
import {Checkbox, Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {initialUserValues} from "../../../utils/constants";
import Drawer from "../../common/Drawer";
import {ButtonSubmit, SFormItemModal, SFormModal, SInputModal, STitleModal} from "../../../styles/common";
import styled from "styled-components";
import {getTheme} from "../../../redux/selects/auth";
import {userCreator, toggleModalUser} from "../../../redux/reducers/userReducer";

const EditModalUser = ({activeEditUser, setActiveEditUser}) => {
    const [form] = Form.useForm()
    const dispatch = useDispatch();
    const tempTheme = useSelector(state => getTheme(state))
    const isModalVisible = useSelector(state => state.user.isModalVisible)
    const loadingPutUser = useSelector(state => state.user.loadingPutUser)


    useEffect(() => {
        form.setFieldsValue(activeEditUser)
    }, [activeEditUser])

    const handleCancel = () => {
        form.setFieldsValue(initialUserValues)
        dispatch(toggleModalUser())
        setActiveEditUser(initialUserValues)
    }

    const onFinish = async (values) => {
        const prepareValues = {
            ...values,
            method: 'put'
        }

        dispatch(userCreator(prepareValues, activeEditUser.id))
    }

    return (
        <Drawer visible={isModalVisible}  onClose={handleCancel}>
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
                    <ButtonSubmit loading={loadingPutUser} htmlType='submit'>
                        Submit
                    </ButtonSubmit>
                </SFormItem>
            </SFormModal>
        </Drawer>
    )
}

export default EditModalUser
const SFormItem = styled(SFormItemModal)`
  label {
    width: 230px !important;
  }
`