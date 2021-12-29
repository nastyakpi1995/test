import React, {useEffect, useState} from "react";
import UserMainWrapper from "../common/UserMainWrapper";
import NewProfile from "./NewProfile";
import Profile from "./Profile";
import {getProfilesAxiosRequest} from "../../api/usersApi";
import {getProfilesCreator} from "../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getProfiles} from "../../redux/selects/profile";
import EditModalProfile from "../common/EditModalProfile";

const Profiles = () => {
    const dispatch = useDispatch();
    const [isLoader, setIsLoader] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [activeProfile, setActiveProfile] = useState({
        name: '',
        gender: 'male',
        city: '',
        birthdate: '',
        id: null
    })

    const profiles = useSelector(state => getProfiles(state))

    useEffect(() => {
        if (profiles.length <= 0 || isLoader) {
            getProfilesAxiosRequest().then(({data}) => {
                dispatch(getProfilesCreator(data))
               setIsLoader(false)
            })
        }
    }, [isLoader])

    return (
        <UserMainWrapper>
            <EditModalProfile activeProfile={activeProfile}
                              setIsLoader={setIsLoader}
                              isVisible={isVisible}
                              setIsVisible={setIsVisible}/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {profiles.length >= 0 ? profiles.map((profile, idx) => (
                    <Profile key={idx} profile={profile} setActiveProfile={setActiveProfile} setIsVisible={setIsVisible} setIsLoader={setIsLoader} />
                )) : null}
                <NewProfile setIsVisible={setIsVisible} />
            </div>
        </UserMainWrapper>
    )
}

export default Profiles
