
const types = {
    setMessageDataType: 'setMessageDataType',
    setMessageDataDefaultType: 'setMessageDataDefaultType',
    setTempThemeType: 'setTempThemeType',
    setMenuActiveType: 'setMenuActiveType',
}

const initState = {
    messageData: {
        isVisible: false,
        message: '',
        type: 'success'
    },
    tempTheme: 'light',
    menuActive: 'profiles'
}

const authReducer = (state= initState, action) => {
    switch (action.type) {
        case types.setMessageDataType: {
            const {message, success} = action.messageData
            return {
                ...state,
                messageData: {
                    isVisible: true,
                    message,
                    type: success ? 'success' : 'error'
                }
            }
        }
        case types.setMessageDataDefaultType: {
            return {
                ...state,
                messageData: {
                    isVisible: false,
                    message: '',
                    type: action.typeData
                }
            }
        }

        case types.setTempThemeType: {
            return ({
                ...state,
                tempTheme: action.payload
            })
        }
        case types.setMenuActiveType: {
            return ({
                ...state,
                menuActive: action.payload
            })
        }

        default: {
            return state
        }
    }
}

export const setMessageDataCreator = (messageData) => ({
    type: types.setMessageDataType,
    messageData,
})
export const setMessageDataDefaultCreator = (typeData) => ({
    type: types.setMessageDataDefaultType,
    typeData
})
export const setThemeCreator = (payload) => ({
    type: types.setTempThemeType,
    payload
})
export const setMenuActiveCreator = (payload) => ({
    type: types.setMenuActiveType,
    payload
})
export default authReducer
