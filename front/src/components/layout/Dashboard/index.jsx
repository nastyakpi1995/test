import React, {useEffect} from "react";
import HeaderWrapper from "../../common/header/HeaderWrapper";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {Row} from "antd";
import DashboardCard from "./DashboardCard";
import {getDashboardDataCreator} from "../../../redux/reducers/dashboardReducer";
import {getCurrentTitle} from "../../../utils/constants";

const Dashboard = () => {
    const dispatch = useDispatch();
    const dashboard = useSelector(state => state.dashboard.dashboardData)

    useEffect(() => {
        dispatch(getDashboardDataCreator())
    }, [])

    return (
        <HeaderWrapper>
            <Container>
                <Row gutter={24}>
                    {dashboard.map(el => (
                        <DashboardCard key={el.name} name={getCurrentTitle(el.name)} count={el.count}/>
                    ))}
                </Row>
            </Container>
        </HeaderWrapper>

        )
}

export default Dashboard;
const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`
