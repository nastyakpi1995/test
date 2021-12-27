import axios from "axios";
import {TOKEN} from "../utils/constants";
const baseUrl = 'http://localhost:4002/api'

export const registerAxiosRequest = (body) => {
    return axios.post(`${baseUrl}/user/register`, {...body})
}

export const loginAxiosRequest = (body) => {
   return axios.post(`${baseUrl}/user/login`, {...body}).then(data => {
       if (data.data.token) {
           localStorage.setItem(TOKEN, data.data.token)
       }
   }).catch(error => console.log(error))
}
