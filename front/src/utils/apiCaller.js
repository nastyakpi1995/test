import axios from "axios";
import {authToken, BASE_URL} from "./constants";
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
             notification.success({
                message: response.data.message
            })
            return response
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

