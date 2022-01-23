import moment from "moment";
import deleteImgWhiteIcon from "../images/icons/deleteImgWhiteIcon.svg";
import deleteImg from "../images/icons/DeleteIcon.svg";
import editWhiteIcon from "../images/icons/editWhiteIcon.svg";
import edit from "../images/icons/editIcon.svg";

export const authToken = 'token'
export const savedUser = 'user'

export const initialProfileValues = {
    name: '',
    gender: 'male',
    city: '',
    birthdate: moment(),
    id: null,
    currentUserId: null
}

export const initialUserValues = {
    username: '',
    isadmin: false,
    id: '',
    email: ''
}

export const links = {
    registration: '/registration',
    login: '/login',
    profiles: '/profiles',
    dashboard: '/dashboard',
    users: '/users',
    all: '*'
}

export const SLIDING_TIMEOUT = 8000;
export const BASE_URL = 'http://localhost:4002'

export const prepareMessageData = {
    message: 'you log out successfully',
    success: 'success'
}

export const getCurrentTitle = (name) => {
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
export const buttonDataExample = (tempTheme, onDeleteProfile, onEditProfile) => {
    const isDark = tempTheme === 'dark';

    return [
        {onClick: onDeleteProfile, id: 1, title: 'delete', icon: isDark ? deleteImgWhiteIcon :  deleteImg },
        {onClick: onEditProfile, id: 2, title: 'edit', icon: isDark ? editWhiteIcon : edit}]
}
