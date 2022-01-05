import React, {useCallback, useEffect, useState} from "react";
import {Layout, Menu} from "antd";
import {
    UsergroupDeleteOutlined,
    AreaChartOutlined,
    KeyOutlined,
} from '@ant-design/icons';
import {NavLink, useNavigate} from "react-router-dom";
import {authToken, savedUser} from "../../utils/constants";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserCreator} from "../../redux/reducers/userReducer";
import styled from "styled-components";

const {Header} = Layout

const HeaderContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.user)

    const logOut = useCallback(() => {
        const prepareMessageData = {
            isVisible: true,
            message: 'you log out successfully',
            success: 'success'
        }

        dispatch(setMessageDataCreator(prepareMessageData))
        localStorage.setItem(authToken, '')
        localStorage.removeItem(savedUser)
        dispatch(setUserCreator(null))
        navigate('/login')
    }, [])

    return (
        <Header>
                <HeaderWrap>
                    <ImgContainer>
                        <Img src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'} />
                    </ImgContainer>
                    <Text>{currentUser?.username}</Text>
                    <LogOut onClick={logOut}>Log out</LogOut>
                </HeaderWrap>
                        {currentUser?.isadmin ? (
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
                                <Menu.Item key="1" icon={<KeyOutlined />}><NavLink to={'/profiles'} >Profiles</NavLink></Menu.Item>
                                <Menu.Item key="2" icon={<AreaChartOutlined />}><NavLink to={'/dashboard'}>DashBoard</NavLink></Menu.Item>
                                <Menu.Item key="3" icon={<UsergroupDeleteOutlined />}><NavLink to={'/users'}>Users</NavLink> </Menu.Item>
                            </Menu>
                        ) : null}
        </Header>
    )
}

const HeaderWrap = styled.div`
  float: left;
  width: 170px;
  height: 100%;
  display: flex;
`;
const ImgContainer = styled.div`
  width: 40px;
  height: 65px;
  border: 2px solid #c6c2c2;
  border-radius: 15px;
  margin-right: 15px;
`;
const Img = styled.img`
  width: 100%;
`
const Text = styled.p`
  color: white
`
const LogOut = styled(Text)`
  cursor: pointer;
  margin-left: 10px;
`


export default HeaderContainer
