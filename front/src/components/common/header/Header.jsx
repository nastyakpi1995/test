import React, {useCallback} from "react";

import {Link, useNavigate} from "react-router-dom";
import {authToken, links, savedUser} from "../../../utils/constants";
import {setThemeCreator} from "../../../redux/reducers/stateReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserCreator} from "../../../redux/reducers/userReducer";
import styled from "styled-components";
import avatarAdmin from '../../../images/avatarAdmin.svg'
import avatarUser from '../../../images/avatarUser.svg'
import AdminMenu from "./AdminMenu";
import {Switch} from "antd";
import {getTheme} from "../../../redux/selects/auth";
import {theme} from "../../../styles/theme";


const HeaderContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.user)
    const tempTheme = useSelector(state => getTheme(state))
debugger
    const handleLogOut = useCallback(() => {
        localStorage.setItem(authToken, '')
        localStorage.removeItem(savedUser)
        dispatch(setUserCreator(null))
        navigate(links.login)
    }, [dispatch])

    const changeTheme = (e) => {
        dispatch(setThemeCreator(e ? 'light' : 'dark'))
    }
    return (
        <Header temp={tempTheme}>
            <Container>
                <LogoLink to={links.profiles}>
                    <img src={currentUser?.isadmin ? avatarAdmin : avatarUser} alt="user"/>
                    <LogoTitle temp={tempTheme}>{currentUser?.username}</LogoTitle>
                </LogoLink>
                <SNav>
                    {currentUser?.isadmin ? <AdminMenu temp={tempTheme} /> : null}
                    <Switch
                        checked={tempTheme === 'light'}
                        onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                    <Logout temp={tempTheme} onClick={handleLogOut}>
                        <span>Log out</span>
                    </Logout>
                </SNav>
            </Container>
        </Header>
    )
}

export default HeaderContainer

const Header = styled.header`
  width: 100%;
  background: var(${({temp}) => theme[temp].background2});
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
  color: var(${({temp}) => theme[temp].white});
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
  color: var(${({temp}) => theme[temp].white });
  margin-left: 20px;
`
