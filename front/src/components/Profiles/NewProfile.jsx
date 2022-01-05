import React from "react";
import {Card} from "antd";
import {PlusCircleOutlined} from '@ant-design/icons';
import styled from "styled-components";

const NewProfile = ({showModal}) => {
    return (
        <NewProfileCard onClick={showModal}>
            <Icon />
            <Text>Create New Profile</Text>
        </NewProfileCard>
    )
}

const NewProfileCard = styled(Card)`
  width: 300px;
  height: 300px;
  margin: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer
`;
const Icon = styled(PlusCircleOutlined)`
  font-size: 46px;
  color: #08c;
  margin-bottom: 10px
`
const Text = styled.p`
    font-size: 18px;
`

export default NewProfile
