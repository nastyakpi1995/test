import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfoContainer from "./ProfileInfoContainer";

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfoContainer  />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
