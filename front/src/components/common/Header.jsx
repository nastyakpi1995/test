import React from "react";
import {Layout, Menu} from "antd";
import {
    UsergroupDeleteOutlined,
    AreaChartOutlined,
    KeyOutlined,
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

const {Header} = Layout

const HeaderContainer = () => {
    return (
                <Header>
                    <div>
                        <div style={{  float: 'left',
                            width: 170,
                            height: '100%',
                            display: 'flex',
                        }}>
                            <div style={{
                                width: 40,
                                height: 65,
                                border: '2px solid #c6c2c2',
                                borderRadius: 15,
                                marginRight: 15
                            }}>
                                <img style={{ width: '100%'}}
                                     src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'} />
                            </div>
                            <div style={{color: 'white'}}>Urrraa</div>
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                            <Menu.Item key="1" icon={<KeyOutlined />}><NavLink to={'/profiles'} >Profiles</NavLink></Menu.Item>
                            <Menu.Item key="2" icon={<AreaChartOutlined />}><NavLink to={'/profilesd'}>DashBoard</NavLink></Menu.Item>
                            <Menu.Item key="3" icon={<UsergroupDeleteOutlined />}>Users</Menu.Item>
                        </Menu>
                    </div>
                </Header>
    )
}

export default HeaderContainer
