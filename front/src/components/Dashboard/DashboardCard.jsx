import React from "react";
import styled from "styled-components";
import {MyCard} from "../../styles/common";

const DashboardCard = ({name, count}) => {
    return (
        <SDashboard>
            <div className="cardTop">
                <CardTitle>{name}</CardTitle>
                <CardInfo>{count}</CardInfo>
            </div>
        </SDashboard>
    )
}

const CardTitle = styled.p`
  margin-bottom: 50px;
  font-size: 36px;
  color: var(--title);
  letter-spacing: 1px;
  line-height: 34px;
`
const CardInfo = styled.p`
  color: var(--title);
  font-weight: 600;
  font-size: 48px;
  line-height: 34px;
`;

const SDashboard = styled(MyCard)`
  padding: 80px 75px;
  max-width: unset;
  width: auto;
  &:not(:last-child){
    margin-right: 80px;
  }
`

export default DashboardCard
