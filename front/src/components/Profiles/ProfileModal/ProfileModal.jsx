import React from "react";
import { DatePicker, Radio} from "antd";
import {locale} from "moment";
import Drawer from "../../common/Drawer";
import styled from "styled-components";
import {ButtonSubmit, SFormModal, SInputModal, SFormItemModal} from "../../../styles/common";

const ProfileModalInner = ({
    confirmLoading, isOpenModalProfile, handleCancel, activeProfile, onFinish, form, onChange, title
}) => {
    return (
        <Drawer visible={isOpenModalProfile} onClose={handleCancel}>
            <Title>{title}</Title>
            <SFormModal
                  form={form}
                  wrapperCol={{ span: 16 }}
                  initialValues={activeProfile}
                  onFinish={onFinish}>
                <SFormItemModal
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <SInputModal onChange={onChange}/>
                </SFormItemModal>

                <SFormItemModal label='gender' name={'gender'}>
                    <Radio.Group>
                        <Radio checked value={'male'}>male</Radio>
                        <Radio value={'female'}>female</Radio>
                    </Radio.Group>
                </SFormItemModal>
                <SFormItemModal
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your city!' }]}
                >
                    <SInputModal />
                </SFormItemModal>
                <SFormItemModal
                    label="birthdate"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please input date' }]}
                >
                    <DatePicker locale={locale} format={'DD.MM.YYYY'}/>
                </SFormItemModal>
                <SFormItemModal>
                    <ButtonSubmit loading={confirmLoading} htmlType={'submit'}>
                        submit
                    </ButtonSubmit>
                </SFormItemModal>
            </SFormModal>
        </Drawer>
    )
}

const Title = styled.div`
  color: var(--background3);
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
`

const ProfileModal = React.memo(ProfileModalInner)
export default ProfileModal
