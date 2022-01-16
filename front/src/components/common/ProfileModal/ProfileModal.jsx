import React from "react";
import {Button, DatePicker, Form, Input, Radio} from "antd";
import {locale} from "moment";
import Drawer from "../Drawer";
import styled from "styled-components";
import {ButtonSubmit} from "../../../styles/common";

const ProfileModalInner = ({
    confirmLoading, isOpenModalProfile, handleCancel, activeProfile, onFinish, form, onChange, title
}) => {
    return (
        <Drawer visible={isOpenModalProfile} onClose={handleCancel}>
            <Title>{title}</Title>
            <SForm
                  form={form}
                  wrapperCol={{ span: 16 }}
                  initialValues={activeProfile}
                  onFinish={onFinish}>
                <SFormItem
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <SInput onChange={onChange}/>
                </SFormItem>

                <SFormItem label='gender' name={'gender'}>
                    <Radio.Group>
                        <Radio checked value={'male'}>male</Radio>
                        <Radio value={'female'}>female</Radio>
                    </Radio.Group>
                </SFormItem>
                <SFormItem
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your city!' }]}
                >
                    <SInput />
                </SFormItem>
                <SFormItem
                    label="birthdate"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please input date' }]}
                >
                    <DatePicker locale={locale} format={'DD.MM.YYYY'}/>
                </SFormItem>
                <SFormItem>
                    <ButtonSubmit loading={confirmLoading} htmlType={'submit'}>
                        submit
                    </ButtonSubmit>
                </SFormItem>
            </SForm>
        </Drawer>
    )
}

const SForm = styled(Form)`
  max-width: 700px;
  margin: 0 auto;
`
const SFormItem = styled(Form.Item)`

  label {
    width: 110px;
    font-size: 20px;
    color: var(--white);
  }
`
const Title = styled.div`
  color: var(--background3);
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
`
const SInput = styled(Input)`
    border-radius: 10px;
  font-size: 20px;
`;

const ProfileModal = React.memo(ProfileModalInner)
export default ProfileModal
