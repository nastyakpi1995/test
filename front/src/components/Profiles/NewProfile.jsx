import React from "react";
import {Card} from "antd";
import styled from "styled-components";
import Colors from "../../styles/colors";
import plusCircleOutlined from '../../images/icons/addProfileIcon.svg'

const NewProfile = ({showModal}) => {
    return (
        <NewProfileCard onClick={showModal}>
            <NewProfileLink>
                <Icon src={plusCircleOutlined} />
                <Text>Create New Profile</Text>
            </NewProfileLink>
        </NewProfileCard>
    )
}

const NewProfileCard = styled(Card)`
  max-width: 320px;
  width: 100%;
  padding: 75px 0;
  border: 1px solid #D6D8E7;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
  border-radius: 16px;
  margin-bottom: 60px;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;
const NewProfileLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.img`
  margin-bottom: 30px;
`
const Text = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: ${Colors.ADD_PROFILE};
  letter-spacing: 0.75px;
`

export default NewProfile
