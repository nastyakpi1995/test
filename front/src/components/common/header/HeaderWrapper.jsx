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
        <SLayout tempTheme={'light'}>
            <HeaderContainer />
            <Content>{children}</Content>
        </SLayout>
    )
}

const SLayout = styled(Layout)`
  height: 100vh;
  background: var(${({tempTheme})=> theme[tempTheme].title});
`

export default HeaderWrapper
