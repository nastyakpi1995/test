import axios from "axios";
import {authToken, BASE_URL, savedUser} from "./constants";
import {notification} from "antd";


const requestAxios = axios.create({
    baseURL: BASE_URL,
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


const checkStatus = (response, method) => {
    if (response.status >= 200) {
        if (method !== 'get') {
            return notification.success({
                message: response.data.message
            })
        }
       return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
}

export const request = (url, method, data) => {
    const options = {
        headers: getHeaders(),
        method,
        data
    }

    return requestAxios({
        url,
        ...options
    }).then((data) => checkStatus(data, method)).catch(parserJSON)
}

export const registerAxiosRequest = (values) => {
    return axios.post(`${BASE_URL}/api/user/register`, {...values}).then(({data}) => {
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
    return axios.post(`${BASE_URL}/api/user/login`, {...body}).then(data => {
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

