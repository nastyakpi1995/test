import React, {useCallback} from "react";

import {Link, useNavigate} from "react-router-dom";
import {authToken, links, prepareMessageData, savedUser} from "../../../utils/constants";
import {setMessageDataCreator, setThemeCreator} from "../../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserCreator} from "../../../redux/reducers/userReducer";
import styled from "styled-components";
import avatarAdmin from '../../../images/avatarAdmin.svg'
import avatarUser from '../../../images/avatarUser.svg'
import AdminMenu from "./AdminMenu";
import {Switch} from "antd";
import {getTheme} from "../../../redux/selects/auth";

const HeaderContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.user)
    const isDarkTheme = useSelector(state => getTheme(state))

    const handleLogOut = useCallback(() => {
        dispatch(setMessageDataCreator(prepareMessageData))
        localStorage.setItem(authToken, '')
        localStorage.removeItem(savedUser)
        dispatch(setUserCreator(null))
        navigate(links.login)
    }, [dispatch])

    const changeTheme = () => {
        dispatch(setThemeCreator())
    }
    return (
        <Header isDark={isDarkTheme}>
            <Container>
                <LogoLink to={links.profiles}>
                    <img src={currentUser?.isadmin ? avatarAdmin : avatarUser} alt="user"/>
                    <LogoTitle isDark={isDarkTheme}>{currentUser?.username}</LogoTitle>
                </LogoLink>
                <SNav>
                    {currentUser?.isadmin ? <AdminMenu isDark={isDarkTheme} /> : null}
                    <Switch
                        checked={isDarkTheme}
                        onChange={changeTheme}
                        checkedChildren="Light"
                        unCheckedChildren="Dark"
                    />
                    <Logout isDark={isDarkTheme} onClick={handleLogOut}>
                        <span>Log out</span>
                    </Logout>
                </SNav>
            </Container>
        </Header>
    )
}

const Header = styled.header`
  width: 100%;
  background: ${({isDark}) => isDark ? 'var(--whiteLight)' : 'var(--background2Light)'};
  margin-bottom: 20px;
  padding: 10px 15px;
  height: 70px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1700px;
  margin: 0 auto;
`

const SNav = styled.nav`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
`

const Logout = styled.div`
  color: ${({isDark}) => isDark ? 'var(--background2Light)' : ' var(--whiteLight)' };
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  cursor: pointer;
  margin-left: 20px;
`

const LogoTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  color: ${({isDark}) => isDark ? 'var(--background2Light)' : ' var(--whiteLight)' };
  margin-left: 20px;
`

export default HeaderContainer
