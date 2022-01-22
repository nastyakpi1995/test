import axios from "axios";
import {authToken, savedUser} from "./constants";
import {notification} from "antd";
const baseUrl = 'http://localhost:4002'

const requestAxios = axios.create({
    baseURL: baseUrl,
});

const getHeaders = () => {
    return {
        "auth-token": localStorage.getItem(authToken),
        "Content-Type": "application/json",
        Accept: "application/json",
    }
}

function parserJSON(response) {
    if (response.response.data) {
        notification.error({
            message: response.response.data?.message
                ? response.response.data.message
                : 'Error',
            description: response.response.data.message,
        })
        throw response
    }
    notification.warning({
        message: response.message,
    })
    throw response
}


const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
       return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
}

export const request = (url, method) => {
    const options = {
        headers: getHeaders(),
        method
    }
    return requestAxios({
        url,
        ...options
    }).then(checkStatus).catch(parserJSON)
}
export const registerAxiosRequest = (values) => {
    return axios.post(`${baseUrl}/api/user/register`, {...values}).then(({data}) => {
        return data
    }).catch((data) => {
        const prepareData = {
            data,
            success: false,
            message: data.response ? data.response.data.message : 'Yo can not login, server did not run'
        }
        return prepareData
    })
}

export const loginAxiosRequest = (body) => {
    return axios.post(`${baseUrl}/api/user/login`, {...body}).then(data => {
        if (data.data.token) {
            localStorage.setItem(savedUser, JSON.stringify(data.data.user))
            localStorage.setItem(authToken, data.data.token)
        }
        return data.data
    }).catch((data) => {
        const prepareData = {
            data,
            success: false,
            message: data.response ? data.response.data.message : 'Yo can not login, server did not run'
        }
        return prepareData
    })
}

export const createProfilesAxiosRequest = (body) => {
    return axios.post(`${baseUrl}/private/profile/create/${body.userId}`, {...body}, {headers: getHeaders()}).then(data => {
        return data.data
    }).catch(({response}) =>  response.data)
}

export const getProfilesAxiosRequest = () => {
    return axios.get(`${baseUrl}/private/profiles`,  {headers: getHeaders()}).then(data => {
        return data.data
    }).catch(data => {
        console.log(data)
    })
}

export const editProfileAxiosRequest = (body) => {
    return axios.put(`${baseUrl}/private/profile/edit/${body.id}`, {...body}, {headers: getHeaders()}).then(data => {
        return data.data
    }).catch(({response}) =>  response.data)
}
export const deleteProfileAxiosRequest = (id) => {
    return axios.delete(`${baseUrl}/private/profile/delete/${id}`, {headers: getHeaders()}).then(data => {
        return data.data
    }).catch((response) =>  response.data)
}
export const adminDashboardAxiosRequest = () => {
    return axios.get(`${baseUrl}/admin/dashboard`, {headers: getHeaders()})
}
export const getUserDataById = (userId) => {
    return axios.get(`${baseUrl}/admin/user/${userId}`, {headers: getHeaders()})
}

export const editUserAxiosRequest = (values, userId) => {
    return axios.put(`${baseUrl}/admin/user/${userId}`,{...values}, {headers: getHeaders()})
}

export const deleteUserAxiosRequest = (id) => {
    return axios.delete(`${baseUrl}/admin/user/${id}`, {headers: getHeaders()}).then(data => {
        return data.data
    }).catch((response) =>  response.data)
}