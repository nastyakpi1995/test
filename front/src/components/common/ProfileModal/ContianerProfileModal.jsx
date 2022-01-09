import React, {useCallback, useEffect, useState} from "react";
import {Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {createProfilesAxiosRequest, editProfileAxiosRequest} from "../../../api/usersApi";
import {setMessageDataCreator} from "../../../redux/reducers/authReducer";
import {
    setActiveProfileCreator,
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../../redux/reducers/profileReducer";
import moment from "moment";
import {initialProfileValues} from "../../../utils/constants";
import {getFormatedData} from "../../../utils/helpers";
import ProfileModal from "./ProfileModal";


const ContainerProfileModal = () => {
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
            dispatch(setActiveProfileCreator(initialProfileValues))
            form.setFieldsValue(activeProfile)
        }
        setConfirmLoading(false)
    }, [])

    useEffect(() => {
        if (activeProfile) {
            const formatDate = {...activeProfile, birthdate:getFormatedData(activeProfile.birthdate)}
            form.setFieldsValue(formatDate)
        }
    }, [activeProfile])

    const handleCancel = useCallback(() => {
        dispatch(setActiveProfileCreator(initialProfileValues))
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
            birthdate: moment(new Date(values.birthdate)).format("DD.MM.YYYY"),
            userId: activeProfile.currentUserId
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

    const onOk = useCallback(() => {
        form.submit()
    }, [])
    const onChange = (e) => {
        const value = e.target.value;
        form.setFieldsValue({'name': value})
    }

    return (
        <ProfileModal
            confirmLoading={confirmLoading}
            isOpenModalProfile={isOpenModalProfile}
            onOk={onOk}
            handleCancel={handleCancel}
            activeProfile={activeProfile}
            onFinish={onFinish}
            form={form}
            onChange={onChange}
        />
    )
}

export default ContainerProfileModal
