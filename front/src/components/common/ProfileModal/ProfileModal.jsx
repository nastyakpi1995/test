import React from "react";
import {DatePicker, Form, Input, Modal, Radio} from "antd";
import {locale} from "moment";

const ProfileModalInner = ({
    confirmLoading, isOpenModalProfile, onOk, handleCancel, activeProfile, onFinish, form, onChange
}) => {

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
                        onChange={onChange}
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
                    label="birthdate"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please input date' }]}
                >
                    <DatePicker locale={locale} format={'DD.MM.YYYY'}/>
                </Form.Item>
            </Form>
        </Modal>
    )
}
const ProfileModal = React.memo(ProfileModalInner)
export default ProfileModal
