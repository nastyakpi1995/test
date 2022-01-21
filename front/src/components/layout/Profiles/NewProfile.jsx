import React from "react";
import {useSelector} from "react-redux";
import styled from 'styled-components';
import {Card} from 'antd';
import plusCircleOutlinedWhite from '../../../images/icons/addProfileWhiteIcon.svg'
import plusCircleOutlined from '../../../images/icons/addProfileIcon.svg'
import {getTheme} from '../../../redux/selects/auth';
import {theme} from '../../../styles/theme';

const IconForTheme = (tempTheme) => {
    return tempTheme === 'dark' ? plusCircleOutlinedWhite : plusCircleOutlined
}
const NewProfile = ({showModal}) => {
    const tempTheme = useSelector(state => getTheme(state))

    return (
        <NewProfileCard onClick={showModal} temp={tempTheme}>
            <NewProfileLink>
                <Icon src={IconForTheme(tempTheme)} />
                <Text temp={tempTheme}>Create New Profile</Text>
            </NewProfileLink>
        </NewProfileCard>
    )
}

export default NewProfile

const NewProfileCard = styled(Card)`
  max-width: 320px;
  width: 100%;
  padding: 37px 0;
  border: 1px solid var(${({temp}) => theme[temp].line});
  box-sizing: border-box;
  box-shadow: 0 8px 16px rgba(17, 17, 17, 0.04);
  border-radius: 16px;
  margin-bottom: 60px;
  background: var(${({temp}) => theme[temp].white});
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
  color: var(${({temp}) => theme[temp].addProfile});
  letter-spacing: 0.75px;
`