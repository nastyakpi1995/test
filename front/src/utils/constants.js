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
