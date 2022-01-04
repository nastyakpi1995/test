import React, {useCallback, useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import NewProfile from "./NewProfile";
import Profile from "./Profile";
import {getProfilesAxiosRequest} from "../../api/usersApi";
import {
    toggleIsOpenModalCreator,
    toggleLoaderProfileCreator
} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";

const Profiles = () => {
    const dispatch = useDispatch();
    const toggleIsOpenModal = useCallback(() => dispatch(toggleIsOpenModalCreator()), [])
    const isLoader = useSelector(state => state.profile.isLoader)
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        if (isLoader) {
            getProfilesAxiosRequest().then(({data}) => {
                setProfiles(data)
                dispatch(toggleLoaderProfileCreator())
            })
        }
    }, [isLoader])

    useEffect(() => {
        getProfilesAxiosRequest().then(({data}) => {
            setProfiles(data)
        })
    }, [])

    if (isLoader) return <div>loader</div>

    return (
        <UserMainWrapper>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {profiles.length >= 0 ? profiles.map((profile, idx) => (
                    <Profile key={idx}
                             profile={profile}
                             showModal={toggleIsOpenModal}/>
                )) : null}
                <NewProfile showModal={toggleIsOpenModal} />
            </div>
        </UserMainWrapper>
    )
}

export default Profiles
