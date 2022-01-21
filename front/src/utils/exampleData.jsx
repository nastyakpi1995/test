import profileWhiteIcon from '../images/icons/profileWhiteIcon.svg'
import profileDarkIcon from '../images/icons/profileDarkIcon.svg'
import dashboardWhiteIcon from "../images/icons/dashboardWhiteIcon.svg";
import dashboardDarkIcon from "../images/icons/dashboardDarkIcon.svg";
import usersDarkIcon from "../images/icons/usersDarkIcon.svg";
import usersWhiteIcon from "../images/icons/usersWhiteIcon.svg";
import {links} from "./constants";

export const headerListExample = (theme) => {
    const isDark = theme === 'dark'
    return [
        {to: links.profiles, title: 'Profiles', img: isDark ? profileDarkIcon : profileWhiteIcon},
        {to: links.dashboard, title: 'Dashboard', img: isDark ? dashboardDarkIcon : dashboardWhiteIcon},
        {to: links.users, title: 'Users', img: isDark ? usersDarkIcon :  usersWhiteIcon},
    ]
}
