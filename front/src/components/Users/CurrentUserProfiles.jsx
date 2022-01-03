import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import {deleteProfileAxiosRequest, getUserProfilesAxiosRequest} from "../../api/usersApi";
import {useDispatch, useSelector} from "react-redux";
import {setActiveProfileCreator, toggleLoaderProfileCreator} from "../../redux/reducers/profileReducer";
import {setMessageDataCreator} from "../../redux/reducers/authReducer";

const CurrentUserProfiles = ({showModal}) => {
    const [loading, setLoading] = useState(false);
    const [userProfiles, setUserProfiles] = useState([]);
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.profile.selectedByAdminUser)

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);

        getUserProfilesAxiosRequest(currentUser.id).then(data => {
            if (data.success) {
                setUserProfiles(data.userProfiles)
            }
            setLoading(false);
        })
    };

    useEffect(() => {
        if (currentUser.id) {
            loadMoreData();
        }
    }, [currentUser.id, loading]);

    const editUser = (profile) => {
        showModal()
        dispatch(setActiveProfileCreator(profile))
    }
    const onProfileDelete = (id) => {
        setLoading(true)
        deleteProfileAxiosRequest(id).then(data => {
            dispatch(setMessageDataCreator(data))
            setLoading(false)

            if (data.success) {
                dispatch(toggleLoaderProfileCreator())
            }
        })
    }

    return (
        <div
            id="scrollableDiv"
            style={{
                height: 400,
                width: '100%',
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            <h1>User  profiles:</h1>
            <InfiniteScroll
                dataLength={userProfiles.length}
                next={loadMoreData}
                hasMore={userProfiles.length > 50}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active={loading} />}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={userProfiles}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                description={item.name}
                            />
                            <div>{item.gender}</div>
                            <div>{item.city}</div>
                            <div onClick={() => editUser(item)}>edit</div>
                            <div onClick={() => onProfileDelete(item.id)}>delete</div>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    );
};

export default CurrentUserProfiles
