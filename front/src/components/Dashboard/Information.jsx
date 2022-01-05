import React from "react";
import {Card} from "antd";
import styled from "styled-components";

const Information = ({name, counts}) => {
    return (
        <CardInfo hoverable style={{  }}>
            <Info>{name}</Info>
            <Info>{counts}</Info>
        </CardInfo>
    )
}
const CardInfo = styled(Card)`
  width: 300px;
  height: 300px;
  margin: 60px;
  justify-content: center;
  text-align: center
`
const Info = styled.p`
    font-size: 18px;
`

export default Information
