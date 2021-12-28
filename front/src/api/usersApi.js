import axios from "axios";
import {TOKEN} from "../utils/constants";
const baseUrl = 'http://localhost:4002'

const getHeaders = () => {
    return {
        "auth-token": localStorage.getItem(TOKEN),
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

export const registerAxiosRequest = (values) => {
    return axios.post(`${baseUrl}/user/register`, {...values}).then(({data}) => {
        return data
    }).catch(({response}) => response.data)
}

export const loginAxiosRequest = (body) => {
   return axios.post(`${baseUrl}/api/user/login`, {...body}).then(data => {
       if (data.data.token) {
           localStorage.setItem(TOKEN, data.data.token)
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
