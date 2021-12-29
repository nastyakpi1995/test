import React, {useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import Information from "./Information";
import {adminDashboardAxiosRequest} from "../../api/usersApi";
import {useDispatch} from "react-redux";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";

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
        <UserMainWrapper>
            <div style={{display: 'flex', height: '100vh'}}>
                <Information name={'profiles'} counts={counts?.profiles} />
                <Information name={'users'} counts={counts?.usersCount}/>
                <Information name={'profile with Kiev'} counts={counts?.profileKiev} />
            </div>
        </UserMainWrapper>
        )
}

export default Dashboard;
