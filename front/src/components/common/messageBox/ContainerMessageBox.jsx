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
    const {type, isVisible, message} = messageBoxData

    useEffect(() => {
        setIsTop(isVisible)
    }, [isVisible, setIsTop])

    useEffect(() => {
        let timeoutId;

        if (isTop) {
            timeoutId = setTimeout(() => {
                setIsTop(false)
                dispatch(setMessageDataDefaultCreator(type))
            }, SLIDING_TIMEOUT)
        }
        return () => {
            clearTimeout(timeoutId)
        }
    }, [isTop, dispatch, setIsTop])

    return (
        <MessageBox message={message} type={type} isTop={isTop} />
    )
}


export default ContainerMessageBox
