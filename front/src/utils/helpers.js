import moment from "moment";

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