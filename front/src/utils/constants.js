import moment from "moment";

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
