import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Form} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
    profileCreator,
    setActiveProfileCreator, setIsOpenModalCreator,
} from "../../../../redux/reducers/profileReducer";
import moment from "moment";
import {initialProfileValues} from "../../../../utils/constants";
import {getFormatedData} from "../../../../utils/helpers";
import ProfileModal from "./ProfileModal";

const getTitle = (id, name) => {
    return id ? `Change ${name} profile`  : 'Create new profile'
}

const ContainerProfileModal = () => {
    const activeProfile = useSelector(state => state.profile.activeProfile)
    const loadingProfile = useSelector(state => state.profile.loadingProfile)
    const title = useMemo(() => getTitle(activeProfile.id, activeProfile.name),[activeProfile])

    const [form] = Form.useForm()
    const dispatch = useDispatch();

    useEffect(() => {
        if (activeProfile) {
            const formatDate = {...activeProfile, birthdate:getFormatedData(activeProfile.birthdate)}
            form.setFieldsValue(formatDate)
        }
    }, [activeProfile])

    const handleCancel = useCallback(() => {
        dispatch(setActiveProfileCreator(initialProfileValues))
        form.setFieldsValue(activeProfile)
        dispatch(setIsOpenModalCreator(false))
    }, [])

    const onFinish = (values) => {
        const prepareValues = {
            ...values,
            birthdate: moment(new Date(values.birthdate)).format("DD.MM.YYYY"),
            id: activeProfile.currentUserId,
            method: 'post',
            url: 'create'
        }

        if (!activeProfile.id) {
            dispatch(profileCreator(prepareValues))
        } else {
            const prepareData = {
                ...prepareValues,
                id: activeProfile.id,
                method: 'put',
                url: 'edit'
            }
            dispatch(profileCreator(prepareData))
        }
    }

    const onChange = (e) => {
        const value = e.target.value;
        form.setFieldsValue({'name': value})
    }

    return (
        <ProfileModal
            title={title}
            confirmLoading={loadingProfile}
            handleCancel={handleCancel}
            activeProfile={activeProfile}
            onFinish={onFinish}
            form={form}
            onChange={onChange}
        />
    )
}

export default ContainerProfileModal
