import React from "react";
import styled from "styled-components";
import {MyCard} from "../../../styles/common";
import {useSelector} from "react-redux";
import {getTheme} from "../../../redux/selects/auth";
import {theme} from "../../../styles/theme";

const DashboardCard = ({name, count}) => {
    const tempTheme = useSelector((state) => getTheme(state))
    return (
        <SDashboard temp={tempTheme}>
            <SCard>
                <CardTitle temp={tempTheme}>{name}</CardTitle>
                <CardInfo temp={tempTheme}>{count}cdf</CardInfo>
            </SCard>

        </SDashboard>
    )
}

const SCard = styled.div``
const SDashboard = styled(MyCard)`
  padding: 80px 75px;
  max-width: unset;
  width: auto;
  &:not(:last-child){
    margin-right: 80px;
  }
`
const CardTitle = styled.p`
  margin-bottom: 50px;
  font-size: 36px;
   color: var(${({temp}) => theme[temp].title});
  letter-spacing: 1px;
  line-height: 34px;
`
const CardInfo = styled.p`
  color: var(${({temp}) => theme[temp].title});
  font-weight: 600;
  font-size: 48px;
  line-height: 34px;
`;

export default DashboardCard
