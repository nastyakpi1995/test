import React, {useEffect, useState} from "react";
import {Alert} from "antd";
import {useDispatch} from "react-redux";
import {setMessageDataDefaultCreator} from "../../redux/authReducer";


const SLIDING_TIMEOUT = 5000;

const MessageBox = ({messageBoxData: {type, message, isVisible}}) => {
    const [isTop, setIsTop] = useState(false)
    const dispatch = useDispatch()

    const slideMessageBox = () => {
        setTimeout(() => {
            setIsTop(false)
            dispatch(setMessageDataDefaultCreator(type))
        }, SLIDING_TIMEOUT)
    }

    useEffect(() => {
        setIsTop(isVisible)
    }, [isVisible])

    useEffect(() => {
        slideMessageBox()
    }, [isTop])

    return (
        <div>
            <Alert
                showIcon
                style={{position: "absolute", transition: "all 0.4s ease-out", right: 20, top: isTop ? 40 : -100}}
                message={message}
                type={type ? type : 'success'}
            />
        </div>
    )
}

export default MessageBox
