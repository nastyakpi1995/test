import axios from "axios";
import {TOKEN} from "../utils/constants";
const baseUrl = 'http://localhost:4002/api'

export const registerAxiosRequest = (values) => {
    return axios.post(`${baseUrl}/user/register`, {...values}).then(({data}) => {
        return data
    }).catch(({response}) => response.data)
}

export const loginAxiosRequest = (body) => {
   return axios.post(`${baseUrl}/user/login`, {...body}).then(data => {
       if (data.data.token) {
           localStorage.setItem(TOKEN, data.data.token)
       }
       return data.data
   }).catch(({response}) =>  response.data)
}

export const createProfilesAxiosRequest = (body) => {
   return axios.post(`${baseUrl}/profiles`, {...body}).then(data => {
       return data.data
   }).catch(({response}) =>  response.data)
}
