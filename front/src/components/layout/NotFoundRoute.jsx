import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {links} from "../../utils/constants";

const NotFoundRoute = () => {
    return (
        <Wrap>
            <LinkMy to={links.login}>Not Found Route!
                Go to Login</LinkMy>
        </Wrap>
    )
}

export default NotFoundRoute;

const LinkMy = styled(Link)`
  font-Size: 20px
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
`
