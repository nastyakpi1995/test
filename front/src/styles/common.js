import styled from "styled-components";
import {Button, Form, Input} from "antd";
import Title from "antd/es/typography/Title";
import {Link} from "react-router-dom";

export const MyCard = styled.div`
  background: var(--whiteLight);
  max-width: ${({userCard}) => (userCard ? "396px" : "320px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({userCard}) => (userCard ? "30px": "35px")};
  padding-bottom: ${({userCard}) => (userCard ? "30px": "0")};
  border: 1px solid var(--lineLight);
  box-sizing: border-box;
  box-shadow: 0 8px 16px var(--inputBgLight);
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
  color: var(--bodyLight);
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
  background-color: var(--inputBgLight);
  border-radius: 12px;
  border: none;
  font-size: 24px;
  transition: all 0.5s ease-out;
  line-height: 36px;
  letter-spacing: 0.75px;
  color: var(--addProfileLight);
  cursor: pointer;
  &:hover {
    background-color: var(--titleInputLight);
    color: var(--inputBgLight);
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
  color: var(--backgroundLight);
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
  .ant-form-item-control-input-content{
    text-align: center;
  }
  
  .ant-col-offset-8{
    margin: 0 auto;
  }
  .ant-checkbox-inner{
    border-radius: 2px;
    border: 1px solid var(--backgroundLight);
    background: var(--white1Light);
  }
  .ant-checkbox-checked .ant-checkbox-inner::after{
    transform: rotate(
            0deg) scale(1) translate(-19%,-49%);
    width: 12px;
    height: 12px;
    background: var(--backgroundLight);
    transition: unset;
    border: none;
    padding-left: 0;
  }
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox .ant-checkbox-inner,
  .ant-checkbox-checked::after{
    border: 1px solid var(--backgroundLight);
  }
`
export const SInput = styled(Input)`
    border: none;
    border-bottom: 1px solid var(--backgroundLight);
    padding-left: 0;
    color: var(--backgroundLight);
    outline: none;
    background: var(--titleInputLight);;
    border-bottom: 1px solid var(--backgroundLight);
    box-shadow: none;
    &:focus {
      border-color: var(--backgroundLight);
      box-shadow: none;
    }
  &:hover{
    border-color: var(--backgroundLight);
  }
`
export const SInputPassport = styled(Input.Password)`
  border: none;
  border-bottom: 1px solid var(--backgroundLight);
  box-shadow: none;
  padding: 0;
  input {
    padding-left: 0;
    color: var(--backgroundLight);
    outline: none;
    background:  var(--titleInputLight);
    border-bottom: 1px solid var(--backgroundLight);
    box-shadow: none;
  }
  input:focus input:hover {
    border-color: var(--backgroundLight);
    color: var(--titleInputLight);
    box-shadow: none;
  }
  span {
    background: var(--titleInputLight);
    margin: 0;
    width: 25px;
    height: 30px;
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
    color: var(--whiteLight);
  }
`
export const SInputModal = styled(Input)`
    border-radius: 10px;
  font-size: 20px;
`;

export const STitleModal = styled.div`
  color: var(--background3Light);
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
`
