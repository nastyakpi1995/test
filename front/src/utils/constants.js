import moment from "moment";

export const authToken = 'token'
export const savedUser = 'user'

export const initialProfileValues = {
    name: '',
    gender: 'male',
    city: '',
    birthdate: moment(),
    id: null
}

export const initialUserValues = {
    username: '',
    isadmin: false,
    id: '',
    email: ''
}