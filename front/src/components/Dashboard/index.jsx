import React, {useEffect} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import Information from "./Information";

const Dashboard = () => {
    useEffect(() => {

    }, [])
    return (
        <UserMainWrapper>
            <div style={{display: 'flex', height: '100vh'}}>
                <Information />
                <Information />
                <Information />
            </div>
        </UserMainWrapper>
        )
}

export default Dashboard;
