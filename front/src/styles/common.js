import styled from "styled-components";
import colors from "./colors";
import {Button, Form} from "antd";
import Title from "antd/es/typography/Title";
import {Link} from "react-router-dom";

export const MyCard = styled.div`
  background: ${colors.WHITE};
  max-width: ${(props) => (props.userCard ? "396px" : "320px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.userCard ? "30px": "35px")};
  padding-bottom: ${(props) => (props.userCard ? "30px": "0")};
  border: 1px solid #D6D8E7;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
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
  padding-bottom: ${(props) => (props.userCard ? "0": "30px")};
`
export const CardInfo = styled.p`
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.75px;
  color: ${colors.BODY};
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

export const ButtonAuth = styled(Button)`
  width: 135px;
  height: 45px;
  background-color: ${colors.INPUT_BG};
  border-radius: 12px;
  border: none;
  font-size: 24px;
  transition: all 0.5s ease-out;;
  line-height: 36px;
  letter-spacing: 0.75px;
  color: ${colors.ADD_PROFILE};
  cursor: pointer;
  &:hover {
    background-color: ${colors.TITLE};
    color: ${colors.INPUT_BG};
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
  color: black;
`

export const SForm = styled(Form)`
  width: 555px;
  .ant-form-item-required{
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 1px;
    color: ${colors.LABEL};
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
    display: none;
  }
  .ant-input,.ant-input-affix-wrapper{
    border: none;
    border-bottom: 1px solid #14142B;
    padding-left: 0;
    color: ${colors.TITLE};
    outline: none;
    background: transparent;
  }
  .ant-input-affix-wrapper:hover{
    border-bottom: 1px solid #14142B;
  }
  .ant-form-item-control-input-content{
    text-align: center;
  }
  
  .ant-col-offset-8{
    margin: 0 auto;
  }
  .ant-checkbox-inner{
    border-radius: 2px;
    border: 1px solid #14142B;
    background: #E5E5E5;
  }
  .ant-checkbox-checked .ant-checkbox-inner::after{
    transform: rotate(
            0deg) scale(1) translate(-19%,-49%);
    width: 12px;
    height: 12px;
    background: black;
    transition: unset;
    border: none;
    padding-left: 0;
  }
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox .ant-checkbox-inner,
  .ant-checkbox-checked::after{
    border: 1px solid #14142B;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,.ant-input-affix-wrapper{
    box-shadow: none;
    outline: none;
    border-color: unset;
  }
`