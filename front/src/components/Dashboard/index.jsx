import React, {useEffect, useState} from "react";
import HeaderWrapper from "../common/HeaderWrapper";
import Information from "./Information";
import {adminDashboardAxiosRequest} from "../../api/usersApi";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import styled from "styled-components";

const Dashboard = () => {
    const [counts, setCounts] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        adminDashboardAxiosRequest().then(({data}) => {
            setCounts(data.data)
        }).catch(({response}) => {
            dispatch(setMessageDataCreator(response.data))
        })
    }, [])

    return (
        <HeaderWrapper>
            <DashboardWrap>
                <Information name={'profiles'} counts={counts?.profiles} />
                <Information name={'users'} counts={counts?.usersCount}/>
                <Information name={'profile with Kiev'} counts={counts?.profileKiev} />
            </DashboardWrap>
        </HeaderWrapper>
        )
}
const DashboardWrap = styled.div`
  display: flex;
  height: 100vh
`

export default Dashboard;
