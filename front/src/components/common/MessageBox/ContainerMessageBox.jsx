import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMessageDataDefaultCreator} from "../../../redux/reducers/authReducer";
import MessageBox from "./MessageBox";
import {getMessageBoxSelect} from "../../../redux/selects/auth";


const SLIDING_TIMEOUT = 8000;

const ContainerMessageBox = () => {
    const [isTop, setIsTop] = useState(false)
    const dispatch = useDispatch()
    const messageBoxData = useSelector(state => getMessageBoxSelect(state))
    const {type, isVisible} = messageBoxData

    const slideMessageBox = useCallback(() => {
        if (isTop) {
            setTimeout(() => {
                setIsTop(false)
                dispatch(setMessageDataDefaultCreator(type))
            }, SLIDING_TIMEOUT)
        }
    }, [isTop])

    useEffect(() => {
        setIsTop(isVisible)
    }, [isVisible])

    useEffect(() => {
        slideMessageBox()
    }, [isTop])

    return (
        <MessageBox messageBoxData={messageBoxData} isTop={isTop} />
    )
}


export default ContainerMessageBox
