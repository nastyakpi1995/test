import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMessageDataDefaultCreator} from "../../../redux/reducers/stateReducer";
import MessageBox from "./MessageBox";
import {getMessageBoxSelect} from "../../../redux/selects/auth";
import {SLIDING_TIMEOUT} from "../../../utils/constants";

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
