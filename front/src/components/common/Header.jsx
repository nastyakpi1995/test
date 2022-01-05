import React, {useCallback, useEffect, useState} from "react";

import {Link, NavLink, useNavigate} from "react-router-dom";
import {authToken, savedUser} from "../../utils/constants";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserCreator} from "../../redux/reducers/userReducer";
import styled from "styled-components";
import colors from "../../styles/colors";
import profileIcon from '../../images/icons/profileIcon.svg'
import dashboardIcon from '../../images/icons/dashboardIcon.svg'
import usersIcon from '../../images/icons/usersIcon.svg'
import avatarAdmin from '../../images/avatarAdmin.svg'
import avatarUser from '../../images/avatarUser.svg'

const HeaderContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.user)

    const handleLogOut = useCallback(() => {
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
            <Container>
                <Logo>
                    <Link to={"/"}><img src={currentUser?.isadmin ? avatarAdmin : avatarUser} alt="user"/>
                        <LogoTitle>{currentUser?.username}</LogoTitle></Link>
                </Logo>
                <SNav>
                    {currentUser?.isadmin ? (
                    <Nav>
                        <NavList><Link to={'/profiles'}>
                            <Text>Profiles</Text>
                            <img src={profileIcon} alt="profile"/></Link></NavList>
                        <NavList>
                            <Link to={'/dashboard'}>
                                <Text>Dashboard</Text>
                                <img src={dashboardIcon} alt="dashboard"/>
                            </Link>
                        </NavList>
                        <NavList>
                            <Link to={'/users'}>
                                <Text>Users</Text>
                                <img src={usersIcon} alt="users"/>
                            </Link>
                        </NavList>
                    </Nav>
                    ) : null}
                    <Logout>
                        <li onClick={handleLogOut}><span style={{cursor:"pointer"}} >Log out</span></li>
                    </Logout>
                </SNav>
            </Container>
        </Header>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SNav = styled.nav`
  display: flex;
  align-items: center;
`;

const Nav = styled.ul`
  margin-right: 100px;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`
const NavList = styled.li`
  margin-right: 45px;
  &:last-child{
    margin-right: 0;
  }
  & img {
    margin-right: 25px;
  }
  &:not(:first-child) img {
    vertical-align: baseline;
  }
`

const Text = styled.div`
  color: ${colors.TITLE};
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
`

const Logout = styled.ul`
  color: ${colors.TITLE};
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
`

const LogoTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
`
const Header = styled.header`
  width: 100%;
  background: ${colors.BACKGROUND};
  margin-bottom: 60px;
  padding: 16px 35px;
`

export default HeaderContainer
