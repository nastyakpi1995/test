import React from "react";
import { DatePicker, Radio} from "antd";
import {locale} from "moment";
import Drawer from "../../../common/Drawer";
import {ButtonSubmit, SFormModal, SInputModal, SFormItemModal, STitleModal} from "../../../../styles/common";
import {useSelector} from "react-redux";
import {getTheme} from "../../../../redux/selects/auth";

const ProfileModalInner = ({
    confirmLoading, handleCancel, activeProfile, onFinish, form, onChange, title
}) => {
    const tempTheme = useSelector(state => getTheme(state))
    const isOpenModalProfile = useSelector(state => state.profile.isOpenModalProfile)

    return (
        <Drawer visible={isOpenModalProfile} onClose={handleCancel}>
            <STitleModal temp={tempTheme}>{title}</STitleModal>
            <SFormModal
                  form={form}
                  wrapperCol={{ span: 16 }}
                  initialValues={activeProfile}
                  onFinish={onFinish}>
                <SFormItemModal
                    temp={tempTheme}
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <SInputModal onChange={onChange}/>
                </SFormItemModal>

                <SFormItemModal temp={tempTheme} label='gender' name={'gender'}>
                    <Radio.Group>
                        <Radio checked value={'male'}>male</Radio>
                        <Radio value={'female'}>female</Radio>
                    </Radio.Group>
                </SFormItemModal>
                <SFormItemModal
                    temp={tempTheme}
                    label="City"
                    name="city"
                    rules={[{ required: true, message: 'Please input your city!' }]}
                >
                    <SInputModal />
                </SFormItemModal>
                <SFormItemModal
                    temp={tempTheme}
                    label="birthdate"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please input date' }]}
                >
                    <DatePicker locale={locale} format={'DD.MM.YYYY'}/>
                </SFormItemModal>
                <SFormItemModal temp={tempTheme}>
                    <ButtonSubmit loading={confirmLoading} htmlType={'submit'}>
                        submit
                    </ButtonSubmit>
                </SFormItemModal>
            </SFormModal>
        </Drawer>
    )
}

const ProfileModal = React.memo(ProfileModalInner)
export default ProfileModal
