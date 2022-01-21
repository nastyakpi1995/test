import React from "react";
import {Layout} from "antd";
import HeaderContainer from "./Header";
import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {useSelector} from "react-redux";
import {getTheme} from "../../../redux/selects/auth";

const {Content} = Layout
const HeaderWrapper = ({children}) => {
    const tempTheme = useSelector(state => getTheme(state))

    return (
        <SLayout temp={tempTheme}>
            <HeaderContainer />
            <Content>{children}</Content>
        </SLayout>
    )
}

export default HeaderWrapper
const SLayout = styled(Layout)`
  height: 100vh;
  background: var(${({temp})=> theme[temp].white});
`
