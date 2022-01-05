import React, {useEffect, useState} from "react";
import {Alert} from "antd";
import {useDispatch} from "react-redux";
import {setMessageDataDefaultCreator} from "../../redux/reducers/authReducer";
import styled from "styled-components";


const SLIDING_TIMEOUT = 8000;

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
            <MyAlert
                showIcon
                isTop={isTop}
                message={message}
                type={type ? type : 'success'}
            />
        </div>
    )
}

const MyAlert = styled(Alert)`
  position: absolute;
  transition: all 0.4s ease-out;
  right: 20px;
  top: ${props => {
    return props.isTop ? '80px' : '-100px'
  }};
`
export default MessageBox
