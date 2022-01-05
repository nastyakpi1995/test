import React, {useEffect, useState} from "react";
import HeaderWrapper from "../common/HeaderWrapper";
import Information from "./DashboardCard";
import {adminDashboardAxiosRequest} from "../../api/usersApi";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";
import styled from "styled-components";
import {Col, Row, Spin} from "antd";
import DashboardCard from "./DashboardCard";

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
    return (
        <HeaderWrapper>
            <div className="container">
                <h1>Dashboard</h1>
                <Row gutter={24}>
                    {dashboard.map(el => (
                        <DashboardCard key={el.name} name={getCurrentTitle(el.name)} count={el.count}/>
                    ))}
                </Row>
            </div>
        </HeaderWrapper>

        )
}
const DashboardWrap = styled.div`
  display: flex;
  height: 100vh
`

export default Dashboard;
