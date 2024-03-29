import styled from "styled-components";
import {Button, Form, Input} from "antd";
import Title from "antd/es/typography/Title";
import {Link} from "react-router-dom";
import {theme} from "./theme";

export const MyCard = styled.div`
   background: var(${({temp}) => theme[temp].white});
   max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 0;
   border: 1px solid var(${({temp}) => theme[temp].line});
  box-sizing: border-box;
  box-shadow: 0 8px 16px var(${({temp}) => theme[temp].inputBg});
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
  padding-bottom: 30px;
`
export const CardInfo = styled.p`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.75px;
  color: var(${({temp}) => theme[temp].body});
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
    background-color: var(--titleInput);
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
`
export const SInput = styled(Input)`
    border: none;
    border-bottom: 1px solid var(--background);
    padding-left: 0;
    color: var(--background);
    outline: none;
    background: var(--titleInput);;
    border-bottom: 1px solid var(--background);
    box-shadow: none;
    &:focus {
      border-color: var(--background);
      box-shadow: none;
    }
  &:hover{
    border-color: var(--background);
  }
`
export const SInputPassport = styled(Input.Password)`
  border: none;
  border-bottom: 1px solid var(--background);
  box-shadow: none;
  padding: 0;
  input {
    padding-left: 0;
    color: var(--background);
    outline: none;
    background:  var(--titleInput);
    border-bottom: 1px solid var(--background);
    box-shadow: none;
  }
  input:focus input:hover {
    border-color: var(--background);
    color: var(--titleInput);
    box-shadow: none;
  }
  span {
    background: var(--titleInput);
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
    color: var(${({temp}) => theme[temp].white});
    text-transform: capitalize;
  }
`
export const SInputModal = styled(Input)`
    border-radius: 10px;
  font-size: 20px;
`;

export const STitleModal = styled.div`
  color: var(${({temp}) => theme[temp].white});
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
`
