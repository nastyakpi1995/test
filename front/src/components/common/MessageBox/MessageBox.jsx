import React from "react";
import {Alert} from "antd";
import styled from "styled-components";

const MessageBoxInner = ({messageBoxData, isTop}) => {
    const {type, message} = messageBoxData
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
const MessageBox = React.memo(MessageBoxInner);
export default MessageBox
