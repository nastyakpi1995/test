import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import {getUserProfilesAxiosRequest} from "../../api/usersApi";
import {useSelector} from "react-redux";

const CurrentUserProfiles = ({showModal}) => {
    const [loading, setLoading] = useState(false);
    const [userProfiles, setUserProfiles] = useState([]);

    const currentUserId = useSelector(state => state.profile.selectedByAdminUserId)

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);

        getUserProfilesAxiosRequest(currentUserId).then(data => {
            if (data.success) {
                setUserProfiles(data.userProfiles)
            }
            setLoading(false);
        })
    };

    useEffect(() => {
        if (currentUserId) {
            loadMoreData();
        }
    }, [currentUserId]);

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
            <h1>User profiles:</h1>
            <InfiniteScroll
                dataLength={userProfiles.length}
                next={loadMoreData}
                hasMore={userProfiles.length > 50}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active={loading} />}
                endMessage={<Divider plain><div onClick={showModal}>Add profile +</div></Divider>}
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
                        </List.Item>
                    )}
                />
            </InfiniteScroll>
        </div>
    );
};

export default CurrentUserProfiles
