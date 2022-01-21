import React from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {headerListExample} from "../../../utils/exampleData";
import {theme} from "../../../styles/theme";

const isActive = (location, title) => {
    const locationString = location.pathname.toLowerCase().split('/').join('')
    const titleLower = title.toLowerCase()
    return locationString === titleLower
}

const AdminMenu = ({temp}) => {
    const location = useLocation();
    return (
        <Nav>
            {headerListExample(temp).map(el => (
                <NavList temp={temp} active={isActive(location, el.title)} key={el.title} to={el.to}>
                    <Text temp={temp}>{el.title}</Text>
                    <WrapImg><img src={el.img} alt={el.title}/></WrapImg>
                </NavList>
            ))}
        </Nav>
    )
}

export default AdminMenu

const Nav = styled.div`
  margin-right: 100px;
  display: flex;
  align-items: center;
`;

const NavList = styled(Link)`
  margin-right: 45px;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 4px solid var(${({active, temp}) => active ? theme[temp].white : theme[temp].transparent});
  &:not(:first-child) img {
    vertical-align: baseline;
  }
`

const Text = styled.div`
  color: var(${({temp}) => theme[temp].white});
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  margin-right: 20px;
`

const WrapImg = styled.div`
  width: 20px;
  display: flex;
`
