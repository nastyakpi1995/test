import React from "react";
import {Layout} from "antd";
import HeaderContainer from "./Header";
import styled from "styled-components";

const {Content} = Layout
const HeaderWrapper = ({children}) => {
    return (
        <SLayout>
            <HeaderContainer />
            <Content>{children}</Content>
        </SLayout>
    )
}

const SLayout = styled(Layout)`
  height: 100vh;
`
export default HeaderWrapper
