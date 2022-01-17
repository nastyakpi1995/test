import React, {useCallback} from "react";

import {Link, useNavigate} from "react-router-dom";
import {authToken, links, prepareMessageData, savedUser} from "../../../utils/constants";
import {setMessageDataCreator} from "../../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserCreator} from "../../../redux/reducers/userReducer";
import styled from "styled-components";
import avatarAdmin from '../../../images/avatarAdmin.svg'
import avatarUser from '../../../images/avatarUser.svg'
import AdminMenu from "./AdminMenu";

const HeaderContainer = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.user)

    const handleLogOut = useCallback(() => {
        dispatch(setMessageDataCreator(prepareMessageData))
        localStorage.setItem(authToken, '')
        localStorage.removeItem(savedUser)
        dispatch(setUserCreator(null))
        navigate(links.login)
    }, [dispatch])

    return (
        <Header>
            <Container>
                <LogoLink to={links.profiles}>
                    <img src={currentUser?.isadmin ? avatarAdmin : avatarUser} alt="user"/>
                    <LogoTitle>{currentUser?.username}</LogoTitle>
                </LogoLink>
                <SNav>
                    {currentUser?.isadmin ? <AdminMenu /> : null}
                    <Logout onClick={handleLogOut}>
                        <span>Log out</span>
                    </Logout>
                </SNav>
            </Container>
        </Header>
    )
}

const Header = styled.header`
  width: 100%;
  background: var(--background2);
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
  color: var(--white);
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  cursor: pointer;
`

const LogoTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  color: var(--white);
  margin-left: 20px;
`

export default HeaderContainer
