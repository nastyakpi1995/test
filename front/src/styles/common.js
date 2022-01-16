import styled from "styled-components";
import {Button, Form, Input} from "antd";
import Title from "antd/es/typography/Title";
import {Link} from "react-router-dom";

export const MyCard = styled.div`
  background: var(--white);
  max-width: ${({userCard}) => (userCard ? "396px" : "320px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({userCard}) => (userCard ? "30px": "35px")};
  padding-bottom: ${({userCard}) => (userCard ? "30px": "0")};
  border: 1px solid var(--line);
  box-sizing: border-box;
  box-shadow: 0 8px 16px var(--inputBg);
  border-radius: 16px;
  margin-bottom: 60px;
  margin-left: 15px;
  margin-right: 15px;
`
export const CardTop = styled.div`
  text-align: center;
  width: 256px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: ${({userCard}) => (userCard ? "0": "30px")};
`
export const CardInfo = styled.p`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.75px;
  color: var(--body);
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

export const CardTitle = styled(CardInfo)`
  font-weight: 500;
  margin-bottom: 20px;
`

// form

export const ButtonSubmit = styled(Button)`
  width: 135px;
  height: 45px;
  background-color: var(--inputBg);
  border-radius: 12px;
  border: none;
  font-size: 24px;
  transition: all 0.5s ease-out;
  line-height: 36px;
  letter-spacing: 0.75px;
  color: var(--addProfile);
  cursor: pointer;
  &:hover {
    background-color: var(--title);
    color: var(--inputBg);
  }
`

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const MyTitle = styled(Title)`
  font-size: 20px;
  margin-bottom: 15px;
`
export const LinkToRegister = styled(Link)`
  font-size: 16px;
  color: var(--background);
`

export const SForm = styled(Form)`
  width: 555px;
  .ant-form-item-required{
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 1px;
    color: var(--label);
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
    display: none;
  }
  .ant-input,.ant-input-affix-wrapper{
    border: none;
    border-bottom: 1px solid var(--background);
    padding-left: 0;
    color: var(--title);
    outline: none;
    background: transparent;
  }
  .ant-input-affix-wrapper:hover{
    border-bottom: 1px solid var(--background);
  }
  .ant-form-item-control-input-content{
    text-align: center;
  }
  
  .ant-col-offset-8{
    margin: 0 auto;
  }
  .ant-checkbox-inner{
    border-radius: 2px;
    border: 1px solid var(--background);
    background: var(--white1);
  }
  .ant-checkbox-checked .ant-checkbox-inner::after{
    transform: rotate(
            0deg) scale(1) translate(-19%,-49%);
    width: 12px;
    height: 12px;
    background: var(--background);
    transition: unset;
    border: none;
    padding-left: 0;
  }
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox .ant-checkbox-inner,
  .ant-checkbox-checked::after{
    border: 1px solid var(--background);
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,.ant-input-affix-wrapper{
    box-shadow: none;
    outline: none;
    border-color: unset;
  }
`

// modal Form
export const SFormModal = styled(Form)`
  max-width: 700px;
  margin: 0 auto;
`
export const SFormItemModal = styled(Form.Item)`
  label {
    width: 110px;
    font-size: 20px;
    color: var(--white);
  }
`
export const SInputModal = styled(Input)`
    border-radius: 10px;
  font-size: 20px;
`;
