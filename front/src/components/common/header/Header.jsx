import React, {useCallback} from "react";

import {Link, useNavigate} from "react-router-dom";
import {authToken, savedUser} from "../../../utils/constants";
import {setMessageDataCreator} from "../../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserCreator} from "../../../redux/reducers/userReducer";
import styled from "styled-components";
import profileIcon from '../../../images/icons/profileIcon.svg'
import dashboardIcon from '../../../images/icons/dashboardIcon.svg'
import usersIcon from '../../../images/icons/usersIcon.svg'
import avatarAdmin from '../../../images/avatarAdmin.svg'
import avatarUser from '../../../images/avatarUser.svg'

const HeaderContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.user)

    const handleLogOut = useCallback(() => {
        const prepareMessageData = {
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
                <LogoLink to={"/"}>
                    <img src={currentUser?.isadmin ? avatarAdmin : avatarUser} alt="user"/>
                    <LogoTitle>{currentUser?.username}</LogoTitle>
                </LogoLink>
                <SNav>
                    {currentUser?.isadmin ? (
                    <Nav>
                        <NavList  to={'/profiles'}>
                            <Text>Profiles</Text>
                            <img src={profileIcon} alt="profile"/>
                        </NavList>
                        <NavList to={'/dashboard'}>
                                <Text>Dashboard</Text>
                                <img src={dashboardIcon} alt="dashboard"/>
                        </NavList>
                        <NavList to={'/users'}>
                                <Text>Users</Text>
                                <img src={usersIcon} alt="users"/>
                        </NavList>
                    </Nav>
                    ) : null}
                    <Logout>
                        <div onClick={handleLogOut}><span style={{cursor:"pointer"}} >Log out</span></div>
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

const Nav = styled.div`
  margin-right: 100px;
  display: flex;
  align-items: center;
`;
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const NavList = styled(Link)`
  margin-right: 45px;
  display: flex;
  
  img {
    fill: red;
  }
  &:not(:first-child) img {
    vertical-align: baseline;
  }
`

const Text = styled.div`
  color: var(--white);
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  margin-right: 20px;
`

const Logout = styled.div`
  color: var(--white);
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
`

const LogoTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  color: var(--white);
  margin-left: 20px;
`
const Header = styled.header`
  width: 100%;
  background: var(--background2);
  margin-bottom: 60px;
  padding: 16px 35px;
`

export default HeaderContainer
