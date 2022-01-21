import React from "react";
import {Alert} from "antd";
import styled from "styled-components";

const MessageBoxInner = ({type, message, isTop}) => {
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

const MessageBox = React.memo(MessageBoxInner);
export default MessageBox
const MyAlert = styled(Alert)`
  position: absolute;
  transition: all 0.4s ease-out;
  z-index: 99999;
  right: 20px;
  top: ${({isTop}) => isTop ? '80px' : '-100px'};
`
