import React from "react";
import {Layout, Menu} from "antd";
import {
    UsergroupDeleteOutlined,
    AreaChartOutlined,
    KeyOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import HeaderContainer from "./Header";

const {Header, Content} = Layout
const UserMainWrapper = ({children}) => {
    return (
     <div>
         <Layout>
            <HeaderContainer />
             <Content>{children}</Content>
         </Layout>

     </div>
    )
}

export default UserMainWrapper
