import React from "react";
import {Layout} from "antd";
import HeaderContainer from "./Header";

const {Content} = Layout
const HeaderWrapper = ({children}) => {
    return (
     <div>
         <Layout>
            <HeaderContainer />
             <Content>{children}</Content>
         </Layout>
     </div>
    )
}

export default HeaderWrapper
