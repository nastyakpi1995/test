import axios from "axios";
import {authToken, savedUser} from "../utils/constants";
const baseUrl = 'http://localhost:4002'

const getHeaders = () => {
    return {
        "auth-token": localStorage.getItem(authToken),
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

export const registerAxiosRequest = (values) => {
    return axios.post(`${baseUrl}/api/user/register`, {...values}).then(({data}) => {
        if (data.success) {
            localStorage.setItem(savedUser, JSON.stringify(values))
        }
        return data
    }).catch(({response}) => response.data)
}

export const loginAxiosRequest = (body) => {
   return axios.post(`${baseUrl}/api/user/login`, {...body}).then(data => {
       if (data.data.token) {
           localStorage.setItem(authToken, data.data.token)
       }
       return data.data
   }).catch(({response}) =>  response.data)
}

export const createProfilesAxiosRequest = (body) => {
   return axios.post(`${baseUrl}/private/profile/create`, {...body}, {headers: getHeaders()}).then(data => {
       return data.data
   }).catch(({response}) =>  response.data)
}

export const getProfilesAxiosRequest = () => {
    return axios.get(`${baseUrl}/private/profiles`,  {headers: getHeaders()}).then(data => {

        return data.data
    }).catch((error) => console.log(error))
}

export const editProfileAxiosRequest = (body, id) => {
    return axios.put(`${baseUrl}/private/profile/edit/${id}`, {...body}, {headers: getHeaders()}).then(data => {
        return data.data
    }).catch(({response}) =>  response.data)
}
export const deleteProfileAxiosRequest = (id) => {
    return axios.delete(`${baseUrl}/private/profile/delete/${id}`, {headers: getHeaders()}).then(data => {
        return data.data
    }).catch(({response}) =>  response.data)
}
