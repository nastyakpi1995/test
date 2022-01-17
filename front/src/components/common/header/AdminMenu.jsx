import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {headerListExample} from "../../../utils/exampleData";

const AdminMenu = () =>  (
    <Nav>
        {headerListExample.map(el => (
            <NavList key={el.title} to={el.to}>
                <Text>{el.title}</Text>
                <WrapImg><img src={el.img} alt={el.title}/></WrapImg>
            </NavList>
        ))}
    </Nav>
)


const Nav = styled.div`
  margin-right: 100px;
  display: flex;
  align-items: center;
`;

const NavList = styled(Link)`
  margin-right: 45px;
  display: flex;
  align-items: center;
  
  &:not(:first-child) img {
    vertical-align: baseline;
  }
`

const Text = styled.div`
  color: var(--whiteLight);
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.75px;
  margin-right: 20px;
`

const WrapImg = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
`
export default AdminMenu
