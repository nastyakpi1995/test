import s from './Profile.module.css';
import {useState} from "react";

const ProfileInfo = ({userProfile}) => {
    const [isEditStatus, setIsEditStatus] = useState(false)
    const [textStatus, setTextStatus] = useState('this is status text')

    const changeTextStatus = (e) => {
      const text = e.target.value;
        setTextStatus(text)
    }
    const toggleEditStatus = () => {
        setIsEditStatus(prevState => !prevState)
    }
    return (
        <div className={s.content}>
            <div className={s.contentImg_wrap}>
                <img className={s.contentImg} src={'https://webneel.com/wallpaper/sites/default/files/images/04-2013/island-beach-scenery-wallpaper.jpg'} />
            </div>
            {isEditStatus ? (
                <input onBlur={toggleEditStatus} autoFocus={true} value={textStatus} onChange={changeTextStatus} />
            ) : (
                <div onDoubleClick={toggleEditStatus}>{textStatus}</div>
            )}
            <div>
                <div className={s.avatar}>
                    <img src={userProfile?.img} alt=""/>
                </div>
                <div>
                    {userProfile?.status}
                </div>
                </div>
        </div>
    )
}
export default ProfileInfo;
