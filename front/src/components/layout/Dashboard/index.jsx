import React, {useEffect, useState} from "react";
import HeaderWrapper from "../../common/header/HeaderWrapper";
import {adminDashboardAxiosRequest} from "../../../utils/apiCaller";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../../redux/reducers/authReducer";
import styled from "styled-components";
import { Row} from "antd";
import DashboardCard from "./DashboardCard";

const getCurrentTitle = (name) => {
    switch (name) {
        case "users":
            return "Users: "
        case "profiles":
            return "Profiles: "
        case "adult":
            return "Profiles over 18 years old: "
        default:
            return ''
    }
}

const Dashboard = () => {
    const [dashboard,setDashboard] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        adminDashboardAxiosRequest().then(({data}) => {
            setDashboard(data.data)
        }).catch(({response}) => {
            dispatch(setMessageDataCreator(response.data))
        })
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

const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`

export default Dashboard;
